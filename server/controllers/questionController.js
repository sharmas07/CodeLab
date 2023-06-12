import Question from "../models/questionModel.js";

export const addQues = async(req, res)=>{
    try{
        const {serialNo, nameOfExperiment, questionDescription, testCases} =req.body;
        const question = {
            serialNo,
            nameOfExperiment,
            questionDescription,
            testCases
        }
        const newQues = new Question(question);
        const savedQues = await newQues.save();
        res.status(201).json(savedQues);
    }
    catch(error){
        res.send('error while adding question')
    }
}

export const submitQues = async (req, res)=>{
    try {
        const {submittedCode} = req.body.code;
        // TODO: compilation check of the submitted code

        // success if code doesnt have any errors
        // failure if have any errors
        res.json({
            status:false,
            msg:'your code is wrong'
        })
    } catch (error) {
        
    }
}