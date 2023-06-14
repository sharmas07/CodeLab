import QuestionsNav from "./QuestionsNav";
import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import axios from 'axios'
import Button from "react-bootstrap/Button";
const CodeEditorPage = () => {
  const [output, setOutput] = useState('')
  const [code, setCode] = useState('')
  const editorRef = useRef(null);
  const submitCode = async ()=>{
    console.log(code)
    const response = await axios.post('https://gatecodelab.onrender.com/question/submitques',{code})
    console.log(response)
    setOutput(response.data.stdout)
  }
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    // this is where you can get source code from editor
    console.log(editorRef.current.getValue());
    setCode(editorRef.current.getValue());
  }


  const {name, testcase} = useParams()
  return (
    <>
      
      <QuestionText name={name}/>
      <Editor
      ref={editorRef}
      onMount={handleEditorDidMount}
      onChange={showValue}
        height="50vh"
        width="100%"
        
        theme="vs-dark"
        defaultLanguage="python"
      />
      <p style={{margin:'1rem'}}>testcase : {testcase}</p>
      <OutputArea output={output}/>

      <div className="foot">
        <div className="foot-container">
          <span variant="outline-warning" className="b" >Run</span>{" "}
          <span variant="outline-success"  className="b" onClick={submitCode}>Submit</span>{" "}
        </div>
      </div>
    </>
  );
};
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
export default CodeEditorPage;
