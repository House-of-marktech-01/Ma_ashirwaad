// server/routes/authRoutes.js
import express from 'express';
const router = express.Router();
import {authenticateToken} from '../Middlewares/Authmiddleware.js';
import {register,googleSignup,login,verifyEmail,getAllUsers,getUser} from '../Controllers/authController.js';

// Register Route
router.post('/register', register);
router.post('/google-signup', googleSignup);

// Login Route
router.post('/login', login);

// Verify email
router.post('/verify-email', verifyEmail);
router.get('/getAllUsers', getAllUsers);
router.get('/getUser/:id', getUser);

export default router;
