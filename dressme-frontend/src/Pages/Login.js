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

  const handlePasswordChange= (e) => {
    setPassword(e.target.value);
    setStatus(null);
  };

  const handlesubmit=(e)=>{
    e.preventDefault();
  

   const data={email, password};
    

    fetch("http://localhost:8080/Login",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{
      //alert('Saved successfully.');
      Swal.fire({
      icon: "success",
      title:"Login Successful: Redirecting to Home Page"});
      navigate('/Userpage');
    }).catch((err)=>{
      console.log(err.message)
    })
  }

    return (
      <div className="LoginForm">
        <h1 className="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  
  <form onSubmit= {handlesubmit}>
      <label>Email <input type="email" name="emailAddress" value={email} onChange={handleEmailChange}/></label>
      <br/><label>Password <input type="password" name="password" value={password} onChange={handlePasswordChange}/></label>
      <br/><button className='btn' type="submit">Log In</button>
  </form>
  <Link to="/forgot-password">Forgot Password?</Link>

  </div>
      </div>
    );
  }
  
  export default Login
   