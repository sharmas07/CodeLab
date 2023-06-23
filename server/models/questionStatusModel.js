import mongoose from "mongoose";

const questionStatusSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    serialNo: []
})

const QuestionStatus = mongoose.model("QuestionStatus", questionStatusSchema);

export default QuestionStatus;