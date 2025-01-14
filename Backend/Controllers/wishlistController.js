import Wishlist from '../models/Wishlist.js';
import User from '../models/User.js';

export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user.userId }).populate('products');
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateWishlist = async (req, res) => {
    try {
        const { productId, action } = req.body; // action can be 'add' or 'remove'
        const userId = req.user.userId;

        // Find or create the wishlist for the user
        let wishlist = await Wishlist.findOne({ user: userId });
        if (!wishlist) {
            wishlist = new Wishlist({ user: userId, products: [] });
        }

        // Add or remove product based on action
        if (action === 'add') {
            if (!wishlist.products.includes(productId)) {
                wishlist.products.push(productId);
                await wishlist.save(); // Save after adding
                return res.status(200).json({ message: 'Product added to wishlist', wishlist });
            } else {
                return res.status(400).json({ message: 'Product is already in the wishlist' });
            }
        } else if (action === 'remove') {
            wishlist.products.pull(productId);
            await wishlist.save(); // Save after removing
            return res.status(200).json({ message: 'Product removed from wishlist', wishlist });
        } else {
            return res.status(400).json({ message: 'Invalid action' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
