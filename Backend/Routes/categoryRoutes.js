import express from 'express';
const router = express.Router();
import { addcategory, getCategory, getAllCategories, getCategoriesByFor, deleteCategory, editCategory } from '../Controllers/categoryController.js';

router.post('/add-category', addcategory);
router.get('/category/:id', getCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:forValue', getCategoriesByFor);
router.delete('/category/:id', deleteCategory);
router.put('/category/:id', editCategory);

export default router;