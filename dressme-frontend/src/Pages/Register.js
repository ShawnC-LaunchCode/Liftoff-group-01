import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React, { useState } from 'react';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
      console.error('Error checking existing user:', error);
      return false;
    }
  };

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

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />

        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;



// const UserRegistration = () => {
//     const navigate= useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [userExists, setUserExists] = useState(false);
//   const [status, setStatus]= useState(null);


//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = { email, password, name };

//     try {
//         const response = await fetch("http://localhost:8080/Register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         });

//         if (!response.ok) {
//             const responseData = await response.json();
//             if (responseData.message && responseData.message.includes("already exists")) {
//                 setUserExists(true);
//             } else {
//                 console.error("Server returned an error:", response.status, response.statusText);
//                 // Handle other errors accordingly
//             }
//         } else {
//             // Registration successful
//             setStatus("success");
//             navigate("/Login");
//         }
//     } catch (error) {
//         console.error("Error during registration:", error);
//         // Handle other errors accordingly
//     }
// };

// // Showing error message if error is true
// const errorMessage = () => {
//     return (
//         <div
//             className="error"
//             style={{
//                 display: (status === "error" || userExists) ? "" : "none",
//             }}
//         >
//             {userExists ? <h1>User with the same name already exists. Please choose a different name.</h1> : <h1>Please complete all registration fields.</h1>}
//         </div>
//     );
// };


//   return (
//     <div>
//       <h2>User Registration</h2>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default UserRegistration;


// /