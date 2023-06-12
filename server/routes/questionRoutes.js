import { Router } from "express";
import { addQues } from "../controllers/questionController.js";
const router = Router();

router.post('/addques', addQues)

export default router;