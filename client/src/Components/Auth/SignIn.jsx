import React, { useState } from "react";
import "../Styles/SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import i from "../../images/sign.jpg"
import loader from "../../images/loader.gif"
import { base_url } from "../../api";
function SignIn({setUserId}) {
  const [loading, setLoading] = useState(false)
  const [AuthError, setAuthError] = useState(false)
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
    console.log("handleLogin");
    try {
      const response = await axios.post(
        `${base_url}/auth/signin`,
        {email, password}
      );
      console.log(response)
      localStorage.setItem('userId',response.data.user._id)
      localStorage.setItem('auth-token',response.data.auth_token)
      // setUserId(response.data.user._id)
      navigate('/allquestions')
      setLoading(false)  
    } catch (error) {
      setAuthError(true)
      console.log(error)
      setLoading(false)
    }
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
            {AuthError && <p style={{color:'red', textAlign:'center'}}>something went wrong!</p>}
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
