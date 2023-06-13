// import React from 'react'
import '../Styles/SignUp.css';

function SignIn() {
  return (

   <>
   <div className="signin-container" >
  <h2>Sign in</h2>
  <form action="signup.php" method="POST">
    <div className="sign">
    <label htmlFor="email"  className='email'>Email:   </label>
    <input type="email" id="email" name="email" required /><br /><br />
    <label htmlFor="password" className='pass'>Password: </label>
    <input type="password" id="password" name="password" required /><br /><br />
    </div>
     
    {/* <button>Login</button> */}
    </form>
          <button>Login</button>
        {/* </form> */}
      </div>
    </>
  );
}

export default SignIn
