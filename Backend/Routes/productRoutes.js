// routes/productRoutes.js
import express from 'express';
import {
    addProduct,
    editProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    getProductByCategory,
    upload
} from '../controllers/productController.js';

const router = express.Router();

router.post('/add', upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 4 }
]), addProduct);

router.put('/edit/:id', upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 4 }
]), editProduct);

router.delete('/delete/:id', deleteProduct);
router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.get('/category/:id', getProductByCategory);

export default router;