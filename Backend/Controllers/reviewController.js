import Review from '../Models/Review.js';
import User from '../models/User.js';

export const addReview = async (req, res) => {
    try {
        const { product, rating, comment } = req.body;
        const user = req.user.userId; // Assuming user ID is stored in req.user
        const review = new Review({ user, product, rating, comment });
        await review.save();
        res.status(201).json({ message: 'Review added successfully', review });
    } catch (error) {
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
    }
};

export const getReviewsByProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({ product: productId }).populate('user');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const { rating, comment } = req.body;
        const review = await Review.findById(reviewId);
        
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        
        if (review.user.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Not authorized to update this review' });
        }

        review.rating = rating;
        review.comment = comment;
        review.updateOne=Date.now();
        await review.save();
        res.status(200).json({ message: 'Review updated successfully', review });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const review = await Review.findById(reviewId);
        
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        
        if (review.user.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Not authorized to delete this review' });
        }

        await Review.findByIdAndDelete(reviewId);
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
