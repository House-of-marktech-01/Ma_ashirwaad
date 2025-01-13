import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }],
    status: {
        type: String,
        enum: ['pending','placed', 'packed', 'shipped', 'delivered', 'cancelled','returned','refund initiated','refund completed'],
        default: 'pending',
        required: true
    },
    statusHistory: [{
        status: {
            type: String,
            enum: ['pending','placed', 'packed', 'shipped', 'delivered', 'cancelled','returned','refund initiated','refund completed']
        },
        updatedAt: {
            type: Date,
            default: Date.now   
        }
    }],
    paymentMethod: {
        type: String,
        enum: ['cod', 'cashless'],
        required: true
    },
    razorpayOrderId: {
        type: String,
        required: false
    },
    razorpayPaymentId: {
        type: String,
        required: false
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    discount:{
        type: Number,
        required: false,
        default: 0
    },
    shippingCharge: {
        type: Number,
        required: true,
        default: 0
    },
    cancellationReason: {
        type: String,
        required: false
    },
    totalAmount: {
        type: Number,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;