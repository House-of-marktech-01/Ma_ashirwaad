import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId }).populate('products.product');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateCart = async (req, res) => {
    try {
        const { productId, quantity, action } = req.body; // action can be 'add', 'remove', or 'decrease'
        const userId = req.user.userId;

        // Find or create the cart for the user
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, products: [] });
        }

        // Add, remove, or decrease product based on action
        const productIndex = cart.products.findIndex(p => p.product.toString() === productId);

        if (action === 'add') {
            if (productIndex > -1) {
                // If product exists, update quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // If product does not exist, add it
                cart.products.push({ product: productId, quantity });
            }
        } else if (action === 'remove') {
            cart.products = cart.products.filter(p => p.product.toString() !== productId);
        } else if (action === 'decrease') {
            if (productIndex > -1) {
                // Decrease the quantity
                cart.products[productIndex].quantity -= quantity;
                // Remove the product if quantity is zero or less
                if (cart.products[productIndex].quantity <= 0) {
                    cart.products.splice(productIndex, 1);
                }
            } else {
                return res.status(400).json({ message: 'Product not found in cart' });
            }
        } else {
            return res.status(400).json({ message: 'Invalid action' });
        }

        // Save the cart
        cart.updatedAt = Date.now();
        await cart.save();

        res.status(200).json({ message: 'Cart updated successfully', cart });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};