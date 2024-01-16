import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {

  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); 

  const handleEmailChange= (e) => {
    setEmail(e.target.value);
    setStatus(null);
  };

  const handlePasswordchange= (e) => {
    setPassword(e.target.value);
  };

  const handlesubmit=(e)=>{
    e.preventDefault();
  }

   const data={email, password};
    
console.log(data);
    fetch("http://localhost:8080/login",{
      method:"GET",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{
      //alert('Saved successfully.');
      Swal.fire({icon: "success",
      title:"Login Successful: Redirecting to Home Page"});
      navigate('/Userpage');
    }).catch((err)=>{
      console.log(err.message)
    })
    

    return (
      <div className="LoginForm">
        <h1 className="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  
  <form onSubmit= {handlesubmit}>
      <label>Email <input type="email" name="emailAddress" value={handleEmailChange}/></label>
      <br/><label>Password <input type="text" name="password" value={handlePasswordchange}/></label>
      <br/><button id="loginButton" type="submit">Log In</button>
  </form>
  </div>
      </div>
    );
  }
  
  export default Login
   