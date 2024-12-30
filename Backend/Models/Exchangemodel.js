import mongoose from "mongoose";

// Define the schema
const requestSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    requestType: { type: String, enum: ['return', 'exchange'], required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create the model
const Request = mongoose.model('Request', requestSchema);

// Export the model
export default Request;
