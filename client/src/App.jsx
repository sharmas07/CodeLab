import React from "react";
import "./App.css";
import SignIn from "../src/Components/Auth/SignIn";
import SignUp from "../src/Components/Auth/SignUp";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import QuestionsView from "../src/Components/question/QuestionsView";
import CodeEditorPage from "../src/Components/CodeEditor/CodeEditorPage";
import CreateQuestionsPage from "../src/Components/teacher/CreateQuestionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/allquestions" element={<QuestionsView />} />
        <Route
          path="/code_editor/:name/:testcase"
          element={<CodeEditorPage />}
        />
        <Route path="/teacher" element={<CreateQuestionsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
