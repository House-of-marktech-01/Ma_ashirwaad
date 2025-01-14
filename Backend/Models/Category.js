import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    for:{
        type:String,
        enum:['Men','Women','Both','New Arrivals'],
        default:'Both'
    }
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);
export default Category;