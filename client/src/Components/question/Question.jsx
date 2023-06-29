import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css"
import done from '../../images/approved.png'
import close from '../../images/close-red.png'

function Question({ ques, quesStatus}) {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (quesStatus && quesStatus.serialNo.includes(ques.serialNo)) {
      setStatus(true)
    }
    else{
      setStatus(false)
    }
  }, [quesStatus])
  
  const navigate = useNavigate();
  return (
    <>
      
          <tr>
            <td>
              <b>{ques.serialNo}</b>
            </td>
            <td>{ques.questionName}</td>
            <td>
            <img style={{width:'25px'}} src={status?done:close} alt="" />
            </td>
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
