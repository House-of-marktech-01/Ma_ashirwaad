import express from 'express';
import { updateWishlist, getWishlist } from '../controllers/wishlistController.js';
import {authenticateToken} from '../middlewares/authMiddleware.js';// Assuming you have an auth middleware

const router = express.Router();

router.get('/', authenticateToken, getWishlist); // Get user's wishlist
router.put('/', authenticateToken, updateWishlist); // Update wishlist with authorization

export default router;
