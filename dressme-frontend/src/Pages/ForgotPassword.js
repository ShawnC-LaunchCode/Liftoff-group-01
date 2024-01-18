
import React, { useState } from 'react';
import Swal from 'sweetalert2';


function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email };

    fetch("http://localhost:8080/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          Swal.fire({
            icon: 'success',
            title: 'Password reset email sent!',
            text: 'Please check your email for instructions.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.message || 'An error occurred.',
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Forgot Password</h1>
              <p className="card-text text-center">
                Enter your email address below, and we'll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <button type="submit" className="btn btn-primary">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Include Bootstrap from CDN */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </div>
  );
}

export default ForgotPassword;
