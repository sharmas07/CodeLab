import { Router } from "express";
import { addQues, submitQues } from "../controllers/questionController.js";
const router = Router();

router.post('/addques', addQues)
router.post('/submitques', submitQues);

export default router;