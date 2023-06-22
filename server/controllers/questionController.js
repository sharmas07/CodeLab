import axios from "axios";
import Question from "../models/questionModel.js";

export const addQues = async (req, res) => {
    try {
        const { serialNo, question, questionDescription, submit_testcase } = req.body;
        const newQuestion = {
            serialNo,
            question,
            questionDescription,
            submit_testcase
        }
        const newQues = new Question(newQuestion)
        const savedQues = await newQues.save();
        res.status(201).json(savedQues);
    }
    catch (error) {
        console.log(error)
        res.send('error while adding question')
    }
}


export const getQuestionBySerialNo = async(req, res)=>{
    const query = req.params.serialNo
    console.log(query)
    try {
        const question = await Question.findOne({serialNo:query})
        res.status(200).json(question);
    } catch (error) {
        res.status(500).send(error)
    }
}


export const submitQues = async (req, res) => {
    try {
        let { code, language, testcase, isSubmit, serialNo } = req.body;
        console.log(isSubmit)

        if(isSubmit){
            console.log('inside if')
            // TODO: PULL the test case from the DB by question id
            let db_testcase = await Question.findOne({serialNo:serialNo})
            console.log(db_testcase)
            testcase = db_testcase.submit_testcase
        }
        console.log("after if")
        // compilation check of the submitted code
        const judge_api = process.env.JUDGE_API
        console.log('line 27')
        const options = {
            method: 'POST',
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            params: {
                base64_encoded: 'false',
                fields: '*'
            },
            headers: {
                'content-type': 'application/json',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'e3896b5843msh1b72d1b4a422dd6p17c889jsn4c30d19bffbf',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            data: {
                source_code: code,
                language_id: `${language}`,
                expected_output:testcase
              }
        };
        const response = await axios.request(options);
        console.log('submit got hit')
        console.log(response.data);
        const {token} = response.data
        const output =await getsubmission(token)
        res.json(output)
        
        // success if code doesnt have any errors
        // failure if have any errors
    } catch (error) {
        res.json(error)
    }
}


const getsubmission = async(token)=>{
    try {
        const options = {
            method: 'GET',
            url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            params: {
              base64_encoded: 'false',
              fields: '*'
            },
            headers: {
              'X-RapidAPI-Key': 'e3896b5843msh1b72d1b4a422dd6p17c889jsn4c30d19bffbf',
              'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              return response.data;
          } catch (error) {
              console.error(error);
          }
    } catch (error) {
        console.error(error);
    }

}
