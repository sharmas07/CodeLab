import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    serialNo:Number,
    nameOfExperiment:String,
    questionDescription:String,
    testCases:Array
})

const Question = mongoose.model("Question", questionSchema);

export default Question;