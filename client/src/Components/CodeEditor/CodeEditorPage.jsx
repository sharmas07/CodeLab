import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import axios from "axios";
import loader from "../../images/loader.gif";
import '../Styles/CodeEditor.css'

const CodeEditorPage = () => {
  const language_ref = useRef();
  const [language, setLanguage] = useState(71)
  const [status, setStatus] = useState(" ");
  const [output, setOutput] = useState("");
  const [stderr, setStderr] = useState("");
  const [status_id, setStatusId] = useState(null);
  const [compiling, setCompiling] = useState(false);
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  const submitCode = async () => {
    setLanguage(language_ref.current.value)
    setStatus("")
    setCompiling(true);
    const response = await axios.post(
      "https://gatecodelab.onrender.com/question/submitques",
      { code, language, testcase }
    );
    setCompiling(false);
    if (response.data.stderr) {
      setStderr(response.data.stderr);
      setOutput("");
      setStatusId(response.data.status.id)
    } else {
      setOutput(response.data.stdout);
      setStatus(response.data.status.description)
      setStatusId(response.data.status.id)
    }

    console.log(output);
  };
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    setCode(editorRef.current.getValue());
  }

  const { name, testcase } = useParams();
  return (
    <>
      <QuestionText testcase={testcase} name={name} />
      <div className="language-selector">
        <select ref={language_ref} onChange={(e)=>{setLanguage(e.target.value)}} name="sharmas" id="">
          <option value="71">python</option>
          <option value="4">C</option>
          <option value="21">Java</option>
        </select>
      </div>
      <Editor
        ref={editorRef}
        onMount={handleEditorDidMount}
        onChange={showValue}
        height="50vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="python"
      />
     <h4 style={
      {
        fontWeight:'bold',
        height:"2rem",
        margin:"1rem",
        color:`${status_id===4?'red':'green'}`
      }
     } className="status_text">{status}</h4>
      <OutputArea
        status_id={status_id}
        output={output}
        compiling={compiling}
        stderr={stderr}
      />

      <div className="foot">
        <div className="foot-container">
          <span variant="outline-warning" className="b">
            Run
          </span>{" "}
          <span
            variant="outline-success"
            className={`b`}
            onClick={submitCode}
          >{compiling?<img style={{width:'40px'}} src={loader} alt="" />:"Submit"}</span>{" "}
        </div>
      </div>
    </>
  );
};
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
export default CodeEditorPage;
