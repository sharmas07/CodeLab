import QuestionsNav from "./QuestionsNav";
import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import axios from 'axios'
import Button from "react-bootstrap/Button";
const CodeEditorPage = () => {
  const [output, setOutput] = useState('')
  const [stderr, setStderr] = useState('')
  const [status_id, setStatusId] = useState(null)
  const [compiling, setCompiling] = useState(false)
  const [code, setCode] = useState('')
  const editorRef = useRef(null);
  const submitCode = async ()=>{   
    setCompiling(true);
    const response = await axios.post('https://gatecodelab.onrender.com/question/submitques',{code})
    setCompiling(false)
    if(response.data.stderr){

      setStderr(response.data.stderr)
      setOutput('')
    }
    else{
      setOutput(response.data.stdout)
    }

    console.log(output)

  }
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    // this is where you can get source code from editor
    
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
      <OutputArea status_id={status_id} output={output} compiling={compiling} stderr={stderr}/>

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
