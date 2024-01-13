import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Login() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const handleEmail = (e) => {
      setEmail(e.target.value);
     
  };

  const handlePassword = (e) => {
      setPassword(e.target.value);
      
  };

  // Handling the form submission
  const handleSubmit = (e) => {
     
      e.preventDefault();
      const edata= email;
      const pdata= password;
     
      fetch("http://localhost:8080/Login",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(edata, pdata)
    }).then((res)=>{
      navigate('/cloths');
    })

    
  };


    return (
      <div className="LoginForm">
        <h1 class="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  
  <form  method="post">
      <label>Email <input type="email" name="emailAddress" required/></label>
      <br/><label>Password <input type="text" name="password" required/></label>
      <br/><button id="loginButton" type="submit" onClick={handleSubmit}>Log In</button>
  </form>
  </div>
      </div>
    );
    }
  
  
  
  export default Login
   