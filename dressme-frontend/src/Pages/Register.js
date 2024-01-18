import React, {useState}from "react";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
    const[firstName,setFirstName]=useState("");
    const[lastName, setLastName]= useState("");
  
    const[email, setEmail]=useState("");
    const navigate=useNavigate();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setError(null);
    };

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
      setError(null);
    };
     const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setError(null);
      };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null);
  };


    const handlesubmit=(e)=>{
      e.preventDefault();
      const data={firstName, lastName, email,password};
      

      fetch("http://localhost:8080/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{
        //alert('Saved successfully.')
        Swal.fire({icon: "success",
        title:"Registration Successful!"});
        navigate('/Login');
      }).catch((err)=>{
        console.log(err.message)
      })
    }
   
    return (
      <div className="CreateAccount">
        <h1 className="CreateAccountPageHeader">Welcome to Weather2Wear!</h1>
  <h3>Create a New Account Below</h3>
  <div>
  <form onSubmit={handlesubmit}>
     <label>First Name <input type="text" value={firstName} onChange={handleFirstNameChange}/> </label>
      <label>Last Name <input type="text" value={lastName} onChange={handleLastNameChange}/> </label>
      <label>Email <input type="email" value={email} onChange={handleEmailChange}/></label>
      <label>Password<input type="text" value={password} onChange={handlePasswordChange}/></label>
      <br />
      <button type="submit">Register</button>
  </form>
  </div>
      </div>
    );
  }

  export default Register;