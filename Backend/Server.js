import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import useRoutes from "./Routes/user.js"
import imageRoutes from "../Backend/Routes/Image.js"

dotenv.config();
const app = express();

// Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
  origin: 'http://localhost:5000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true
}));

// Connect to the database
connectDB();

// Define the request schema
const requestSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  requestType: { type: String, enum: ['return', 'exchange'], required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the model
const Request = mongoose.model('Request', requestSchema);

// Default route
app.get('/', (req, res) => {
  res.send("Ma Ashirwad API is working fine");
});

// POST route for /api/request
app.post('/api/request', async (req, res) => {
  try {
    // Extract data from the request body
    const { orderNumber, phoneNumber, requestType } = req.body;

    // Validate required fields
    if (!orderNumber || !phoneNumber || !requestType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new request document
    const newRequest = new Request({
      orderNumber,
      phoneNumber,
      requestType,
    });

    // Save the request to the database
    const savedRequest = await newRequest.save();

    // Return the response with the saved request data
    res.status(201).json({
      message: "Request submitted successfully",
      data: savedRequest,
    });
  } catch (error) {
    res.status(500).json({ message: "Error submitting request", error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
