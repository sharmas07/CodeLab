import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    serialNo:String,
    question:String,
    questionDescription:String,
    submit_testcase: String,
    run_testcase: String,
    input: String
})

const Question = mongoose.model("Question", questionSchema);

export default Question;