import React from "react";
import userHomepage from "./UserHomepage";
import { useState } from "react";

function LoginForm() {

const [emailAddress, setEmailAddress]= useState('');
const [password, setPassword]= useState('');
const loginButton= document.getElementById("loginButton");

const handleClick=()=>{
  setEmailAddress(emailAddress);
  setPassword(password);
  
}

    return (
      <div className="LoginForm">
        <h1 class="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  <form action="./userHomepage.js" method="post">
      <label>Email <input type="email" name="emailAddress" required/></label>
      <br/><label>Password <input type="text" name="password" required/></label>
      <br/><button onClick={handleClick} id="loginButton" type="submit">Log In</button>
  </form>
  </div>
      </div>
    );
  }
  
  export default LoginForm;
   