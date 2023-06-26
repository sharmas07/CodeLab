import React, { useState } from "react";
import "../Styles/SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import i from "../../images/sign.jpg"
import loader from "../../images/loader.gif"
import { base_url } from "../../api";
function SignIn() {
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("handleLogin");

    const response = await axios.post(
      `${base_url}/auth/signin`,
      {email, password}
    );
    localStorage.setItem('userId',response.data._id)
    console.log(response.data._id)
    navigate('/allquestions')
    setLoading(false)
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
            <button onClick={handleLogin} className={`btnElement_${loading?"loading":""}`}>{loading?<img style={{width:'50px'}} src={loader} alt="" />:"Login"}</button>
          </form>
        </div>
        <img src={i} className="i" alt="" />
      </div>
    </>
  );
}

export default SignIn;
