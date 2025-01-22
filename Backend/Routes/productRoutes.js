import express from 'express';
import {
    addProduct,
    editProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    getProductByCategory
} from '../controllers/productController.js';

const router = express.Router();

router.post('/add', addProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.get('/category/:id',getProductByCategory)

export default router;