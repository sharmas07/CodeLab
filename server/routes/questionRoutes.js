import { Router } from "express";
import { addQues, getQuestionBySerialNo, getQuestionStatusOfUser, submitQues } from "../controllers/questionController.js";
const router = Router();

router.post('/addques', addQues)
router.post('/submitques', submitQues);
router.get('/getQuestion/:serialNo', getQuestionBySerialNo);
router.post('/getQuestionStatusOfUser', getQuestionStatusOfUser)
export default router;