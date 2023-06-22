import { Router } from "express";
import { addQues, getQuestionBySerialNo, submitQues } from "../controllers/questionController.js";
const router = Router();

router.post('/addques', addQues)
router.post('/submitques', submitQues);
router.get('/getQuestion/:serialNo', getQuestionBySerialNo);

export default router;