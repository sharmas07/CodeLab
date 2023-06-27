// import React from 'react'
import "./QuestionsView.css";
import Question from "./Question";
import { useState, useEffect } from "react";
import axios from 'axios'
import { questionsData } from "./questionsData";
import { base_url } from "../../api";
import { useNavigate } from "react-router-dom";
const QuestionsView = () => {
  
  const [selectedLanguage, setSelectedLanguage] = useState('P'); // Default selected language is 'P' (Python)
  const filteredData = questionsData.filter(item => item.serialNo.startsWith(selectedLanguage));
  const [quesStatus, setQuesStatus] = useState(null)
  //get user questions status wheather solved or not
  const navigate = useNavigate()
  useEffect(() => {
    
    if(!localStorage.getItem('auth-token')){
      navigate('/auth/signin')
    }
    const fetchData = async()=>{
      const {data} = await axios.post(`${base_url}/question/getQuestionStatusOfUser`, {userId:localStorage.getItem("userId")})
      // console.log(data)
      setQuesStatus(data);
    }
    fetchData();
  }, [])
  
  // Handle language selection change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
    <div className="question-view">
       <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="P">Python</option>
        <option value="C">C</option>
        <option value="J">Java</option>
      </select>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th style={{textAlign:'center'}}>Name Of the Experiment</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((question) => {
            return <Question key={question.questionDescription} quesStatus={quesStatus} ques={question} />;
          })}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};

export default QuestionsView;
