import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, password };

    try {
      const response = await fetch('http://localhost:8080/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).then((res)=>{
              navigate('/Homepage');
           });

      if (!response.ok) {
        console.error('Server returned an error:', response.status, response.statusText);
        // Handle the error accordingly
        setStatus('error');
      } else {
        // Login successful
        setStatus('success');
        // Redirect or perform additional actions on successful login
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the error accordingly
    }
  };

  return (
    <div className="form">
      <div>
        <h1>User Login</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {status === 'error' && <div className="error">Invalid credentials, login failed.</div>}
        {status === 'success' && <div className="success">Login successful!</div>}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;


// import React from "react";
// import { useState,useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";



// function Login() {

//   const navigate=useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

 
//   const handleEmail = (e) => {
//       setEmail(e.target.value);
     
//   };

//   const handlePassword = (e) => {
//       setPassword(e.target.value);
      
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
     
//       e.preventDefault();
//       const edata= email;
//       const pdata= password;
     
//       fetch("http://localhost:8080/Login",{
//       method:"POST",
//       headers:{"content-type":"application/json"},
//       body:JSON.stringify(edata, pdata)
//     }).then((res)=>{
//       navigate('/Homepage');
//     })

    
//   };


//     return (
//       <div className="LoginForm">
//         <h1 class="welcomePageHeader">Welcome to Weather2Wear!</h1>
//   <h3>Please Log In to Your Account</h3>
//   <div>
  
//   <form  method="post">
//       <label>Email <input type="email" name="emailAddress"  value={email} onChange={handleEmail} required/></label>
//       <br/><label>Password <input type="text" name="password"  onchange={handlePassword} required/></label>
//       <br/><button id="loginButton" type="submit" onClick={handleSubmit}>Log In</button>
//   </form>
//   </div>
//       </div>
//     );
//     }
  
  
  
//   export default Login
   