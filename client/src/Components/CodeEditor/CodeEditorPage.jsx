import { useEffect } from "react";
import QuestionText from "./QuestionText";
import OutputArea from "./OutputArea";
import Editor from "@monaco-editor/react";
import axios from "axios";
import loader from "../../images/loader.gif";
import "../Styles/CodeEditor.css";
import { base_url } from "../../api";
import { questionsData } from "../question/questionsData";

const CodeEditorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('auth-token')){
      navigate('/auth/signin')
    }
  }, [])
  
  const { serialNo } = useParams();
  // TODO: get question from the DB using the serialNo and pass it to question text

  const language_ref = useRef();
  const [language, setLanguage] = useState(71);
  const[question, setQuestion] = useState('')
  const [status, setStatus] = useState(" ");
  const [output, setOutput] = useState("");
  const [stderr, setStderr] = useState("");
  const [status_id, setStatusId] = useState(null);
  const [compiling, setCompiling] = useState(false);
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  const submitCode = async () => {
    let userId = localStorage.getItem('userId')
    console.log("submitting code");
    setLanguage(language_ref.current.value);
    setStatus("");
    setCompiling(true);
    const response = await axios.post(`${base_url}/question/submitques`, {
      userId,
      code,
      language,
      testcase:question.testcase,
      isSubmit: true,
      serialNo
    });
    setCompiling(false);
    
    if (response.data.stderr) {
      setStderr(response.data.stderr);
      setOutput("");
      setStatusId(response.data.status.id);
    } else {
      setOutput(response.data.stdout);
      setStatus(response.data.status.description);
      setStatusId(response.data.status.id);
    }

    console.log(output);
  };
  const runCode = async () => {
    console.log("running code");
    setLanguage(language_ref.current.value);
    setStatus("");
    setCompiling(true);
    const response = await axios.post(`${base_url}/question/submitques`, {
      code,
      language,
      testcase:question.testcase,
      isSubmit: false,
      serialNo: "PY1",
    });
    setCompiling(false);
    if (response.data.stderr) {
      setStderr(response.data.stderr);
      setOutput("");
      setStatusId(response.data.status.id);
    } else {
      setOutput(response.data.stdout);
      setStatus(response.data.status.description);
      setStatusId(response.data.status.id);
    }

    console.log(output);
  };
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    setCode(editorRef.current.getValue());
  }



  useEffect(() => {
    const question = questionsData.find(item => item.serialNo === serialNo);
    setQuestion(question)

    // currently fetching the question from the client hardcoded data may use this endpoint in future
    // const fetchData =async ()=>{
    //   const {data} = await axios.get(`${base_url}/question/getQuestion/PY1`)
    // }
    // fetchData();
  }, [])
  
  
  return (
    <>
      <QuestionText question={question} />
      <div className="language-selector">
        <select
          ref={language_ref}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          name="sharmas"
          id=""
        >
          <option value="71">python</option>
          <option value="50">C</option>
          <option value="54">C++</option>
          <option value="91">Java</option>
          <option value="93">JavaScript</option>
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
      <h4
        style={{
          fontWeight: "bold",
          height: "2rem",
          margin: "1rem",
          color: `${status_id === 4 ? "red" : "green"}`,
        }}
        className="status_text"
      >
        {status}
      </h4>
      <OutputArea
        status_id={status_id}
        output={output}
        compiling={compiling}
        stderr={stderr}
      />

      <div className="foot">
        <div className="foot-container">
          <span variant="outline-warning" onClick={runCode} className="b">
            Run
          </span>{" "}
          <span variant="outline-success" className={`b`} onClick={submitCode}>
            {compiling ? (
              <img style={{ width: "40px" }} src={loader} alt="" />
            ) : (
              "Submit"
            )}
          </span>{" "}
        </div>
      </div>
    </>
  );
};
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
export default CodeEditorPage;
