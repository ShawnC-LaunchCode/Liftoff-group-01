import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState(null);

   const navigate= useNavigate();

   const handleEmailChange = (e) => {
     setEmail(e.target.value);
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
     const existingUser = await checkExistingUser(email);
     if (existingUser) {
       setError('User with this email already exists');
       return;
     }

     // Backend registration
     const formData = { email, password };

     try {
       const response = await fetch('http://localhost:8080/register', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData),
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

   const checkExistingUser = async (email) => {
     try {
       const response = await fetch(`http://localhost:8080/checkUser?email=${email}`);
       if (response.ok) {
         const data = await response.json();
         return data.exists;
       } else {
         console.error('Error checking existing user:', response.status, response.statusText);
         return false;
       }
     } catch (error) {
        return false;
        }
      };

      return (
        <div className="form">
          <h1>User Registration</h1>

          console.error('Error checking existing user:', error);
      <div className="messages">
         {error && <div className="error">{error}</div>}
         {successMessage && <div className="success">{successMessage}</div>}
       </div>

       <form onSubmit={handleSubmit}>
         <label>Email</label>
         <input type="text" value={email} onChange={handleEmailChange} required />

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

