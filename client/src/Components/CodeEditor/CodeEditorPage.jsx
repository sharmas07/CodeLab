import QuestionsNav from "./QuestionsNav";
import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import Button from "react-bootstrap/Button";
const CodeEditorPage = () => {
  return (
    <>
      <QuestionsNav />
      <QuestionText />
      <Editor
        height="50vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="python"
      />
      <OutputArea />

      <div className="foot">
        <div className="foot-container">
          <Button variant="outline-warning">Clear</Button>{" "}
          <Button variant="outline-success">Submit</Button>{" "}
        </div>
      </div>
    </>
  );
};
import "bootstrap/dist/css/bootstrap.min.css"; 
export default CodeEditorPage;
