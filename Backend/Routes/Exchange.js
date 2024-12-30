import express from "express";
import Request from "../Models/Exchangemodel.js"; // Correct path to your model

const router = express.Router();

// Handle GET requests to /request
router.get("/request", (req, res) => {
  res
    .status(200)
    .send("Use POST method to submit a return or exchange request.");
});

// Handle POST requests to /request
router.post("/request", async (req, res) => {
  const { orderNumber, phoneNumber, requestType } = req.body;

  // Validate input
  if (
    !orderNumber ||
    !phoneNumber ||
    !["return", "exchange"].includes(requestType)
  ) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  try {
    // Save request to database
    const newRequest = new Request({ orderNumber, phoneNumber, requestType });
    await newRequest.save();
    res
      .status(201)
      .json({ message: "Request submitted successfully", data: newRequest });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

export default router;