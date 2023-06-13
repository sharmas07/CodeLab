import React from 'react'
import '../Styles/SignUp.css';



function SignUp() {
  return (
    <>
    <div className="signin-container" >
  <h2>Sign Up</h2>
  <form action="signup.php" method="POST">
    <div className="sign">
    <label htmlFor="username">Username: </label>
    <input type="text" id="username" name="username" className='user' required /><br /><br />
    <label htmlFor="password">Password: </label>
    <input type="password" id="password" name="password" required /><br /><br />
    <label htmlFor="email" className='email' >Email:   </label>
    <input type="email" id="email" name="email" required /><br /><br />
    <label htmlFor="role">Role:</label>
    <input type="radio" id="student" name="role" defaultValue="student" required />
    <label htmlFor="student">Student</label>
    <input type="radio" id="teacher" name="role" defaultValue="teacher" required />
    <label htmlFor="teacher">Teacher</label><br /><br />
    </div>
    
    <button>Submit</button>

  </form>

</div>
    
    
    </>
  )
}

export default SignUp
