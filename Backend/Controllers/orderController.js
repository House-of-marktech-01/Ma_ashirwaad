import Order from '../Models/Order.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import Cart from '../Models/Cart.js';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const placeOrder = async (req, res) => {
    try {
        const { products, totalAmount, shippingAddress, paymentMethod, discount, shippingCharge } = req.body;
        const order = new Order({
            user: req.user.userId,
            products,
            totalAmount,
            shippingAddress,
            paymentMethod,
            discount,
            shippingCharge
        });
        await order.save();
        const options = {
            amount: totalAmount * 100,
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
        };
        razorpay.orders.create(options, async (error, payment) => {
            if (error) {
                console.error("Error creating order:", error);
                return res.status(500).send({ message: "Something went wrong" });
            }
            console.log("Payment:", payment);
            order.razorpayOrderId = payment.id;
            await order.save();
            res.status(201).json({
                message: 'Order created successfully! Complete payment to confirm.',
                payment,
                order,
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(body).digest('hex');
        if (razorpay_signature === expectedSignature) {
            const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });
            order.status = 'placed';
            order.razorpayPaymentId = razorpay_payment_id;
            order.statusHistory.push({ status: 'placed' });
            await order.save();
            const cart = await Cart.findOne({ user: order.user });
            cart.products = [];
            cart.totalPrice = 0;
            await cart.save();
            res.status(200).json({ message: 'Payment verified successfully!', order });
        } else {
            res.status(400).json({ message: 'Payment verification failed!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, cancellationReason } = req.body;
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        order.status = status;
        if (status === 'cancelled') {
            order.cancellationReason = cancellationReason;
        }
        order.statusHistory.push({ status });
        await order.save();
        res.status(200).json({ message: 'Order updated successfully!', order });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.orderId);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};