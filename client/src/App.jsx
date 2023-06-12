import { useState } from 'react'
import './App.css'
import SignIn from "../src/Components/Auth/SignIn";
import SignIn from "../src/Components/Auth/SignUp";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp/>
    <SignIn/>
    
    </>
  )
}

export default App
