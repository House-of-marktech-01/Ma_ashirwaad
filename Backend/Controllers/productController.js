import Product from '../Models/Product.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../Config/Cloudinary.js';
import multer from 'multer';

// Multer configuration
const storage = multer.memoryStorage();
export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Not an image!'), false);
        }
    }
});

// Add a new product with image upload
export const addProduct = async (req, res) => {
    try {
        console.log(req.body.productData)
        const productData = JSON.parse(req.body.productData); // Parsing JSON data
        // console.log("hii")
        // Upload main image if available
        let mainImageUrl = '';
        if (req.files && req.files['mainImage']) {
            const mainImageBuffer = req.files['mainImage'][0].buffer;
            const mainImageBase64 = `data:${req.files['mainImage'][0].mimetype};base64,${mainImageBuffer.toString('base64')}`;
            mainImageUrl = await uploadToCloudinary(mainImageBase64); // Upload to Cloudinary
        }
        console.log(mainImageUrl)

        // Upload additional images if available
        let additionalImageUrls = [];
        if (req.files && req.files['additionalImages']) {
            for (const file of req.files['additionalImages']) {
                const imageBuffer = file.buffer;
                const imageBase64 = `data:${file.mimetype};base64,${imageBuffer.toString('base64')}`;
                const imageUrl = await uploadToCloudinary(imageBase64);
                additionalImageUrls.push(imageUrl);
            }
        }
        console.log(additionalImageUrls)

        // Create and save the product to DB
        const product = new Product({
            ...productData,
            image: {
                main: mainImageUrl,
                additional: additionalImageUrls
            }
        });

        await product.save(); // Save the product to DB
        res.status(201).json(product); // Respond with the saved product
    } catch (error) {
        res.status(400).json({ message: error.message }); // Error handling
    }
};


// Edit product with image update
export const editProduct = async (req, res) => {
    try {
        const productData = req.body.productData 
            ? JSON.parse(req.body.productData) 
            : {};
        const existingProduct = await Product.findById(req.params.id);
        
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Handle main image update
        let mainImageUrl = existingProduct.image.main;
        if (req.files && req.files['mainImage']) {
            // Delete existing main image
            if (existingProduct.image.main) {
                await deleteFromCloudinary(existingProduct.image.main);
            }
            
            // Upload new main image
            const mainImageBuffer = req.files['mainImage'][0].buffer;
            const mainImageBase64 = `data:${req.files['mainImage'][0].mimetype};base64,${mainImageBuffer.toString('base64')}`;
            mainImageUrl = await uploadToCloudinary(mainImageBase64);
        }

        // Handle additional images update
        let additionalImageUrls = existingProduct.image.additional;
        if (req.files && req.files['additionalImages']) {
            // Delete existing additional images
            for (const url of existingProduct.image.additional) {
                await deleteFromCloudinary(url);
            }
            
            // Upload new additional images
            additionalImageUrls = [];
            for (const file of req.files['additionalImages']) {
                const imageBuffer = file.buffer;
                const imageBase64 = `data:${file.mimetype};base64,${imageBuffer.toString('base64')}`;
                const imageUrl = await uploadToCloudinary(imageBase64);
                additionalImageUrls.push(imageUrl);
            }
        }

        // Update product
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                ...productData,
                image: {
                    main: mainImageUrl,
                    additional: additionalImageUrls
                },
                updatedAt: Date.now()
            },
            { new: true }
        );

        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete product and its images
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Delete images from Cloudinary
        if (product.image.main) {
            await deleteFromCloudinary(product.image.main);
        }
        
        for (const url of product.image.additional) {
            await deleteFromCloudinary(url);
        }

        // Delete product from database
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Get a single product
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find().populate('category').sort({ createdAt: -1 });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get products by category
export const getProductByCategory = async (req, res) => {
    try {
        const { id } = req.query;
        
        if (!id) {
            return res.status(400).json({ message: 'Category ID is required' });
        }

        const products = await Product.find({ category: id })
            .populate('category')
            .sort({ createdAt: -1 }); 

        if (!products.length) {
            return res.status(404).json({ message: 'No products found in this category' });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};