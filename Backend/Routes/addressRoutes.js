import express from 'express';
import {authenticateToken} from '../Middlewares/Authmiddleware.js';
import { addAddress, getAddress, updateAddress, deleteAddress, getAddressById } from '../Controllers/addressController.js';
const router = express.Router();

router.post('/add-address',authenticateToken, addAddress);
router.get('/get-addresses',authenticateToken, getAddress);
router.get('/get-address-by-id/:id', getAddressById);

router.put('/update-address/:addressId',authenticateToken, updateAddress);
router.delete('/delete-address/:addressId', authenticateToken,deleteAddress);

export default router;