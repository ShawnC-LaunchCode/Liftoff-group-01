import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const UserRegistration = () => {
    const navigate= useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [status, setStatus]= useState(null);
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password, name };

    try {
        const response = await fetch("http://localhost:8080/Register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const responseData = await response.json();
            if (responseData.message && responseData.message.includes("already exists")) {
                setUserExists(true);
            } else {
                console.error("Server returned an error:", response.status, response.statusText);
                // Handle other errors accordingly
            }
        } else {
            // Registration successful
            setStatus("success");
            navigate("/Login");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        // Handle other errors accordingly
    }
};

// Showing error message if error is true
const errorMessage = () => {
    return (
        <div
            className="error"
            style={{
                display: (status === "error" || userExists) ? "" : "none",
            }}
        >
            {userExists ? <h1>User with the same name already exists. Please choose a different name.</h1> : <h1>Please complete all registration fields.</h1>}
        </div>
    );
};


  return (
    <div>
      <h2>User Registration</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;


// function Register() {

// const navigate= useNavigate();
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const [status, setStatus] = useState(null);
    
 
 
//     // Handling the name change
//     const handleName = (e) => {
//         setName(e.target.value);
//         setStatus(null);
//     };
 
//     // Handling the email change
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         setStatus(null);
//     };
 
//     // Handling the password change
//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         setStatus(null);
//     };
 
//     // Handling the form submission
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submit button clicked!")
//     const formData= {email, password, name};

//     try{const response = await fetch("http://localhost:8080/Register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         console.error("Server returned an error:", response.status, response.statusText);
//         // Handle the error accordingly
//       } else {
//         // Registration successful
//         setStatus("success");
//         navigate("/Login");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       // Handle the error accordingly
//     }
//   };
    
 
//     // Showing success message
//     const successMessage = () => {
//         return (
//             <div
//                 className="success"
//                 style={{
//                     display: status ==="success" ? "" : "none",
//                 }}
//             >
//                 <h1>User {name} successfully registered!</h1>
//             </div>
//         );
//     };
 
//     // Showing error message if error is true
//     const errorMessage = () => {
//         return (
//             <div
//                 className="error"
//                 style={{
//                     display: status === "error" ? "" : "none",
//                 }}
//             >
//                 <h1>Please complete all registration fields. </h1>
//             </div>
//         );
//     };

//     return (
//         <div className="form">
//             <div>
//                 <h1>User Registration</h1>
//             </div>
 
//             {/* Calling to the methods */}
//             <div className="messages">
//                 {errorMessage()}
//                 {successMessage()}
//             </div>
 
//             <form>
//                 {/* Labels and inputs for form data */}
//                 <label className="label">Name</label>
//                 <input
//                     onChange={handleName}
//                     className="input"
//                     value={name}
//                     type="text"
//                 />
 
//                 <label className="label">Email</label>
//                 <input
//                     onChange={handleEmail}
//                     className="input"
//                     value={email}
//                     type="email"
//                 />
 
//                 <label className="label">Password</label>
//                 <input
//                     onChange={handlePassword}
//                     className="input"
//                     value={password}
//                     type="password"
//                 />
 
//                 <button onClick={handleSubmit} className="btn" type="button">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
   
 // }
  
  //export default Register;