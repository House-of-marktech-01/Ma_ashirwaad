import express from 'express';
import { updateCart, getCart } from '../controllers/cartController.js';
import {authenticateToken} from '../middlewares/authMiddleware.js'; // Assuming you have an auth middleware

const router = express.Router();

router.get('/', authenticateToken, getCart); // Get user's cart
router.put('/', authenticateToken, updateCart); // Update cart with authorization

export default router;