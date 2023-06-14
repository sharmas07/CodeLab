// import { light } from "@material-ui/core/styles/createPalette";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const CreateQuestionsPage = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card
          bg={light}
          // key={variant}
          // text={"light" }
          style={{ width: "50rem" }}
          // className="teacher-questions-card"
        >
          <Card.Header>ADD A NEW QUESTION</Card.Header>
          <Card.Body>
            <Card.Title> Question Description </Card.Title>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="describe your question"
                aria-label="describe your question"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Card.Title> Test cases </Card.Title>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="write test cases"
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
import "bootstrap/dist/css/bootstrap.min.css";
export default CreateQuestionsPage;
