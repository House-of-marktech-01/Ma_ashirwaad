import express from "express";
import multer from "multer";
import cloudinary from "../Config/Cloudinary.js";
import Image from "../Models/Image.js"; // MongoDB Model

const router = express.Router();

// Configure Multer for file handling
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Upload image route
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newImage = new Image({
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id,
    });
    await newImage.save();
    res.status(201).json({ message: "Image uploaded successfully", image: newImage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
