
import mongoose from 'mongoose';
import Review from '../models/Review.js'; 
import Product from '../Models/Product.js';
// import Review from '../Models/review.js';
import User from '../models/User.js';


export const addReview = async (req, res) => {
    try {
        console.log("Received Review Data:", req.body); // Debugging Log

        const { productId, rating, comment } = req.body;
        const user = req.user?.userId; // Ensure userId is present

        // Validate required fields
        if (!productId || !rating || !comment) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        // Validate rating range
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        // Check if product exists
        const productExists = await Product.findById(productId);
        if (!productExists) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if user has already reviewed the product
        const existingReview = await Review.findOne({ user, product: productId });
        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this product' });
        }

        // Create new review
        const review = new Review({
            user,
            product: productId,
            rating,
            comment
        });

        await review.save();

        // Populate user details before sending response
        const populatedReview = await Review.findById(review._id).populate('user', 'name');

        res.status(201).json({ 
            message: 'Review added successfully', 
            review: populatedReview 
        });

    } catch (error) {
 
        console.error('Add Review Error:', error); // Log error
        res.status(500).json({ 
            message: 'Internal server error', 
            error: error.message 
        });

        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user product');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getReviewsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const reviews = await Review.find({ user: userId }).populate('product');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        // 5b772077880b6cb3d041b520ca349c83c2bf58ea
    }
};

// ✅ Improved `getReviewsByProduct` function
export const getReviewsByProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        const reviews = await Review.find({ product: productId })
            .populate('user', 'name') // Populate user name only
            .sort({ createdAt: -1 }); // Sort by newest first

        res.status(200).json(reviews);
    } catch (error) {
        console.error('Get Reviews Error:', error); // Log error
        res.status(500).json({ 
            message: 'Internal server error',
            error: error.message 
        });
    }
};
