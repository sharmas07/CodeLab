// import React from 'react'
import "./QuestionsView.css";
import Question from "./Question";
import axios from "axios";
const QuestionsView = () => {
  const questions = [
    {
        no:'1',
      question:
        "Write a Python function to find the maximum number in a given list.",
      testcase: "[3, 9, 1, 6, 2]",
    },
    {
        no:'2',
      question:
        "Write a Python program to check if a string is a palindrome or not.",
      testcase: "is_palindrome racecar",
    },
    {
        no:'3',
      question:
        "Write a Python function to calculate the factorial of a number.",
      testcase:  "factorial 5",
    },
    {
        no:'4',
      question:
        "Write a Python program to count the number of vowels in a given string.",
      testcase: "count_vowels  Hello World",
    },
    {
        no:'5',
      question: "Write a Python function to check if a number is prime.",
      testcase: "is_prime 17",
    },
    {
        no:'6',
      question:
        "Write a Python program to find the sum of all even numbers in a given list.",
      testcase: "[1, 2, 3, 4, 5, 6] ",
    },
    {
        no:'7',
      question: "Write a Python function to reverse a given string.",
      testcase: "reverse_string  'Python' ",
    },
    {
        no:'8',
      question:
        "Write a Python program to remove duplicate elements from a given list.",
      testcase: " [1, 2, 2, 3, 4, 4, 5]",
    },
    {
        no:'9',
      question: "Write a Python function to check if two strings are anagrams.",
      testcase: "is_anagram   'listen', 'silent' ",
    },
    {
        no:'10',
      question:
        "Write a Python program to find the average of numbers in a given list.",
      testcase: "find_average  [1, 2, 3, 4, 5] ",
    },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name Of the Experiment</th>
            <th>Ques-Avaliable</th>
          </tr>
        </thead>
        <tbody>
            
         
         { questions.map((question)=>{
            return <Question ques={question}/>;
         })
            
         }
          
          {/* <tr>
                        <td><b>2</b></td>
                        <td>Find a subset of a given set whose element sum is equal to a given number
                        </td>
                        <td>Design Analysis of Programs
                            <button> Open Ques </button></td>
                    </tr>
                    <tr>
                        <td><b>3</b></td>
                        <td>Knapsack problem using greedy method</td>
                        <td>Design Analysis of Programs
                            <button>Open Ques</button></td>
                    </tr>
                    <tr>
                        <td><b>4</b></td>
                        <td>Knapsack problem using greedy method</td>
                        <td>Design Analysis of Programs
                            <button>Open Ques</button></td>
                    </tr>
                    <tr>
                        <td><b>5</b></td>
                        <td>Stack operations</td>
                        <td>Design Analysis of Programs
                            <button>Open Ques</button></td>
                    </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default QuestionsView;
