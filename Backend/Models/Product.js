import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mrp: {
        type: Number,
        required: true,
    },
    retailPrice: {
        type: Number,
        required: true,
    },  
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    pattern:{
        type: String,
        required: true,
    },
    attributes: {
        size: {
            type: [String],
            required: true,
        },
        color: {
            type: [String],
            required: true,
        },
    },
    image:{
        main: {
            type: String,
            required: true,
        },
        additional: {
            type: [String],
            required: false,
        }
    },
    inventory:[
        {
            size: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

export default Product;