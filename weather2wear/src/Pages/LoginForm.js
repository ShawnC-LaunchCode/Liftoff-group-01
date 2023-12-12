import React from "react";
import userHomepage from "./UserHomepage";

function LoginForm() {
    return (
      <div className="LoginForm">
        <h1 class="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  <form action="./userHomepage.js" method="post">
      <label>Email <input type="email" name="emailAddress" required/></label>
      <br/><label>Password <input type="text" name="password" required/></label>
      <br/><button id="loginButton" type="submit">Log In</button>
  </form>
  </div>
      </div>
    );
  }
  
  export default LoginForm;
   