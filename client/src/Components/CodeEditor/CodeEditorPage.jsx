import  { useRef } from "react";
import QuestionsNav from "./QuestionsNav";
import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import Button from "react-bootstrap/Button";

const CodeEditorPage = () => {

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    // this is where you can get source code from editor
    console.log(editorRef.current.getValue());
  }


  return (
    <>
      <QuestionsNav />
      <QuestionText />
      <Editor
        height="50vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="python"
        onMount={handleEditorDidMount}
        onChange={showValue}
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
