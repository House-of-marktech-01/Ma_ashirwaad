import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
    type: { 
        type: String, 
        enum: ['Home', 'Work', 'Other'], 
        default: 'Home' 
    }, 
    isPrimary: { type: Boolean, default: false }, 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: false },
    addressLine1: { type: String, required: true }, 
    addressLine2: { type: String }, 
    landmark: { type: String }, 
    city: { type: String, required: true }, 
    state: { type: String, required: true }, 
    country: { type: String, required: true, default: 'India' },
    pincode: { type: String, required: true }, 
    contactNumber: { type: String, required: true }, 
    email: { type: String, required: true }, 
    coordinates: { 
        type: {
            lat: { type: Number },
            long: { type: Number }
        }, 
        required: false 
    }, 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
});

AddressSchema.index({ user: 1, isPrimary: -1 }); 

export default mongoose.model('Address', AddressSchema);
