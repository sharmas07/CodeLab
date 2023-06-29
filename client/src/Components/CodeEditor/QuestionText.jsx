// import { dark } from "@material-ui/core/styles/createPalette";
import Card from "react-bootstrap/Card";
import "../Styles/QuestionText.css";

function QuestionText({ question }) {
  return (
    <>
      <Card body>
        {/* <p style={{fontWeight:'bold', fontSize:'20px'}}>{question.serialNo}. {question.questionDescription}</p>
          <p style={{fontSize:'18px'}}>testcase : {question.testcase}</p> */}
        <div className="question-container">
          <h3>
            {question.serialNo}. {question.questionName}
          </h3>
          <h5>{question.questionDescription}</h5>

          <div className="testcase-section">
            <h6>Test Case:</h6>
            <p>Input: {question.run_testcase_input}</p>
            <p>Expected Output: {question.run_testcase_output}</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default QuestionText;
