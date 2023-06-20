// import { dark } from "@material-ui/core/styles/createPalette";
import Card from "react-bootstrap/Card";

function QuestionText({name, testcase}) {
  return (
    <>
   
        <Card body>
          
          <p style={{fontWeight:'bold', fontSize:'18px'}}>{name}</p>
          <p>testcase : {testcase}</p>
        </Card>
   
    </>
  
  );
}

export default QuestionText;
