// import { useState } from 'react'
import './App.css'
import SignIn from "../src/Components/Auth/SignIn";
import SignUp from "../src/Components/Auth/SignUp";
import { Routes, Route } from 'react-router-dom';
import QuestionsView from "./Components/question/QuestionsView";
import CodeEditorPage from "./Components/CodeEditor/CodeEditorPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>This is Home</h1>} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/allquestions" element={<QuestionsView />} />
      <Route path="/code_editor" element={<CodeEditorPage />} />
    </Routes>
  );
}

export default App
