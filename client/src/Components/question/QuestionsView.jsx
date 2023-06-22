// import React from 'react'
import "./QuestionsView.css";
import Question from "./Question";
import axios from "axios";
import { questionsData } from "./questionsData";
const QuestionsView = () => {
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th style={{textAlign:'center'}}>Name Of the Experiment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {questionsData.map((question) => {
            return <Question ques={question} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default QuestionsView;
