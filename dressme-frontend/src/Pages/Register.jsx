import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function UserRegistration(){

  const [email, setEmail] = useState('');
  const [firstname, setFirstName]= useState('');
  const [lastname, setLastName]= useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate= useNavigate();

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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Front-end validation to prevent duplicate registration
    // const existingUser = (email);
    // if (existingUser) {
    //   setError('User with this email already exists');
    //   return;
    // }

    // Backend registration
    const formData = { email, password };

    try {
      const response = await fetch('http://localhost:8080/Register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        //'Content-Type': 'multipart/form-data',
        'Accept': '*/*',

        'Host': 'localhost:8080',
        'Accept-Encoding':'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Content-Length': '172'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Registration successful!');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed');
    }
  };

//   const checkExistingUser = async (email) => {
//     try {
//       const response = await fetch(`http://localhost:8080/checkUser?email=${email}`);
//       if (response.ok) {
//         const data = await response.json();
//         return data.exists;
//       } else {
//         console.error('Error checking existing user:', response.status, response.statusText);
//         return false;
//       }
//     } catch (error) {
//       console.error('Error checking existing user:', error);
//       return false;
//     }
//   };

  return (
    <div className="form">
      <h1>User Registration</h1>

      <div className="messages">
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
      </div>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailChange} required />

        <label>First Name</label>
         <input type="text" value={firstname} onChange={handleFirstNameChange} required />

       <label>Last Name</label>
        <input type="text" value={lastname} onChange={handleLastNameChange} required />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />

        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
  };

export default UserRegistration;

