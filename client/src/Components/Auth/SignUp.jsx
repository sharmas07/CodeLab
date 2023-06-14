import React, { useState } from "react";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import i from "../../images/signUp.jpg"

function SignUp() {
  const navigate = useNavigate()
  const[username,setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role is "student"

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
      role,
    };
    console.log("handleSignUp");
    console.log(data);

    try {
      const response = await axios.post(
        'https://gatecodelab.onrender.com/auth/signup',
        {username, email, password, role}
      );
      console.log(response.data); // handle the response as per your requirement
      navigate('/allquestions')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="page">
        <div className="containe">
          <h2>Sign Up</h2>
          <form>
            <div className="sign">
              <label htmlFor="usernamename">Username: </label>
              <input
                type="text"
                id="usernamename"
                name="usernamename"
                onChange={handleChangeUser}
                value={username}
                required
                
              />
              <br />
              <br />
              <label htmlFor="password" className="ip"> Password: </label>
              <input type="password" id="password" name="password"  value={password} onChange={handleChangePassword} required />
              <br />
              <br />
              <label htmlFor="email" className="email">
                Email:{" "}
              </label>
              <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail}  required />
              <br />
              <br />
              <div className="roll">
              <label htmlFor="role">Role: </label>
              <input
                type="radio"
                id="student"
                name="role"
                defaultValue="student"
                checked={role === "student"}
                onChange={handleChangeRole}
                required
              />
              <label htmlFor="student">Student</label>
              <input
                type="radio"
                id="teacher"
                name="role"
                defaultValue="teacher"
                checked={role === "teacher"}
                onChange={handleChangeRole}
                required
              />
              <label htmlFor="teacher"> Teacher</label>
              <br />
              <br />
              </div>
            </div>

            <span onClick={handleSignUp} className="btnElement" >Submit</span>
            <p>
              Already have an account? <Link to="/auth/signin">Sign in</Link>
            </p>
          </form>
        </div>
          <img src={i} className="i" alt="" />
      </div>
    </>
  );
}

export default SignUp;
