import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); 

  const handleEmailChange= (e) => {
    setEmail(e.target.value);
    setStatus(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setStatus(null);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    try {
      const response = await fetch('http://localhost:8080/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error('Server returned an error:', response.status, response.statusText);
        // Handle the error accordingly
        setStatus('error');
      } else {
        // Login successful
        setStatus('success');
        navigate("/Homepage")
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
        <label className="userEmail">Email</label>
        <input
          onChange={handleEmailChange}
          className="input"
          value={email}
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


