// config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Function to upload image to Cloudinary
export const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file, {
            folder: 'products',
            use_filename: true,
            unique_filename: true,
        });
        return result.secure_url;
    } catch (error) {
        throw new Error('Error uploading image to Cloudinary');
    }
};

// Function to delete image from Cloudinary
export const deleteFromCloudinary = async (publicUrl) => {
    try {
        // Extract public ID from URL
        const publicId = publicUrl.split('/').slice(-1)[0].split('.')[0];
        await cloudinary.uploader.destroy(`products/${publicId}`);
    } catch (error) {
        throw new Error('Error deleting image from Cloudinary');
    }
};

export default cloudinary;