import React from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css"

function Question({ ques }) {
  const navigate = useNavigate();
  return (
    <>
      
          <tr>
            <td>
              <b>{ques.no}</b>
            </td>
            <td>{ques.question}</td>
            <td>
              Python
              <button className="qBtn" onClick={() => navigate(`/code_editor/${ques.question}/${ques.testcase}`)}>
                {""}
                Open Ques{" "}
              </button>
            </td>
          </tr>

    </>
  );
}

export default Question;
