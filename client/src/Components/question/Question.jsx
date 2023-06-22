import React from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css"

function Question({ ques }) {
  const navigate = useNavigate();
  return (
    <>
      
          <tr>
            <td>
              <b>{ques.serialNo}</b>
            </td>
            <td>{ques.questionDescription}</td>
            <td>
              <button className="qBtn" onClick={() => navigate(`/code_editor/${ques.serialNo}`)}>
                solve
              </button>
            </td>
          </tr>

    </>
  );
}

export default Question;
