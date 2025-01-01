import express from "express"
import { login, signup } from "../Controllers/authController.js";
import authmodel from "../Models/authModel.js";

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;

