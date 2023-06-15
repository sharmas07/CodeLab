import Question from "../models/questionModel.js";
import axios from "axios";

export const addQues = async (req, res) => {
    try {
        const { serialNo, nameOfExperiment, questionDescription, testCases } = req.body;
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
    catch (error) {
        res.send('error while adding question')
    }
}

export const submitQues = async (req, res) => {
    try {
        const { code } = req.body;
        // TODO: compilation check of the submitted code
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
                // source_code: "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\", name);\n  printf(\"hello, %s\n\", name);\n  return 0;\n}",
                source_code: code,
                language_id: 71,
                // stdin: "",
                expected_output:"hello"
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
