import { Router } from "express";
import { login, signup } from "../controllers/authController.js";
const router = Router();

router.post('/signin', login)
router.post('/signup', signup)

export default router;