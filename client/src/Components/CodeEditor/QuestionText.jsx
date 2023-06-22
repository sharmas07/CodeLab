// import { dark } from "@material-ui/core/styles/createPalette";
import Card from "react-bootstrap/Card";

function QuestionText({question}) {
  return (
    <>
   
        <Card body>
          
          <p style={{fontWeight:'bold', fontSize:'20px'}}>{question.serialNo}. {question.questionDescription}</p>
          <p style={{fontSize:'18px'}}>testcase : {question.testcase}</p>
        </Card>
   
    </>
  
  );
}

export default QuestionText;
