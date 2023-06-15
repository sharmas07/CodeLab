import React, { useState } from "react";
import "../Styles/SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import i from "../../images/sign.jpg"
function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
    
  }
  const handleChangePassword = (e)=>{
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("handleLogin");
    console.log(data);

    const response = await axios.post(
      "https://gatecodelab.onrender.com/auth/signin",
      {email, password}
    );
    console.log(response)
    navigate('/allquestions')
  };

  return (
    <>
      <div className="page">
        <div className="card_container">
          <h2>Sign in</h2>
          <form>
            <div className="signup_container">
              <div>
              <label htmlFor="email" className="email">
                Email:{" "}
              </label>
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={handleChangeEmail}
                required
              />
              </div>
             
             <div>
             <label htmlFor="password" className="pass">
                Password:{" "}
              </label>
              <input type="password" id="password" name="password" value={password} 
              onChange={handleChangePassword}
              required />
             </div>
             
            </div>
            <p>
              {" "}
              Don't have an account ? <Link to="/auth/signup">Sign Up</Link>
            </p>
            <button onClick={handleLogin} className="btnElement"  >Login</button>
          </form>
        </div>
        <img src={i} className="i" alt="" />
      </div>
    </>
  );
}

export default SignIn;
