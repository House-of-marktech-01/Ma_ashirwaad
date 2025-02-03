import express from 'express';
import { addReview,   getReviewsByProduct } from '../controllers/reviewController.js';
import {authenticateToken} from '../middlewares/authMiddleware.js'; // Assuming you have an auth middleware

const router = express.Router();

router.post('/', authenticateToken, addReview); // Add review with authorization
// router.get('/', getAllReviews); // Get all reviews
// router.get('/user/:userId', getReviewsByUser); // Get reviews by user
router.get('/product/:productId', getReviewsByProduct); // Get reviews by product
// router.put('/:reviewId', authenticateToken, updateReview); // Update review with authorization
// router.delete('/:reviewId', authenticateToken, deleteReview); // Delete review with authorization

export default router;
