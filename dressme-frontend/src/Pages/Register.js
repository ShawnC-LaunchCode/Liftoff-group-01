import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";



function UserRegistration () {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
      };

      const onSubmit = (values, props) => {
        console.log(values);
        console.log(props)
        setTimeout(()=>{
    
          props.resetForm()
          props.setSubmitting(false)
        },2000)
    
        const registerUrl = "http://localhost:8080/user/register";
        const {emailConfirmation, passwordConfirmation, ...user} = initialValues // decunstraction of the intialValues object the 
    
        
        const headersObj = {
        "Content-Type": "application/json"
        }
        
        axios.post(registerUrl, values, { headers: headersObj })
      .then((response) => {
        console.log("response from backend => ", response);
    
            //redirects to login page
            navigate('/login');;
      })
      .catch((error) => {
        console.error("error while backend calling ", error);
    
        // Note from Erin: Added this code to handle the HTTP Response that the server sends
        if (error.response) {
          //The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error data:", error.response.data);
          console.log("Error status:", error.response.status);
          console.log("Error headers:", error.response.headers);
    
          // Display the error message to the user
          alert("Error: " + error.response.data);
      } else if (error.request) {
          // The request was made but no response was received
          console.log("Error request:", error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error message:", error.message);
      }
    });
    
    
    
    
    
      };
    
    
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        emailConfirmation: Yup.string()
          .oneOf([Yup.ref("email")], "Emails must match")
          .required("Email Confirmation is required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters")
          .max(64, "Password must be at most 64 characters")
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
            "Password must contain at least one number and one special character. Special characters allowed are: !, @, #, $, %, ^, &, *."
          ),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Password Confirmation is required"),
      });
    
      return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Box
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={"5px 5px 10px #d3d3d3"}
                bgcolor="box.main"
                sx={{
                  hover: {
                    boxShadow: "10px 10px 20px #d3d3d3",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  color="primary"
                  padding={2}
                  textAlign={"center"}
                >
                  Register!
                </Typography>
                <Field
                  as={TextField}
                  margin="normal"
                  type={"text"}
                  variant="standard"
                  placeholder="First Name"
                  color="primary"
                  fullWidth
                  name="firstName"  
                  helperText={<ErrorMessage name="firstName" component="span"/>}
                  />
                <Field
                  as={TextField}
                  margin="normal"
                  type={"text"}
                  variant="standard"
                  placeholder="Last Name"
                  color="secondary"
                  fullWidth
                  name="lastName"
                  helperText={<ErrorMessage name="lastName" component="span"/>}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  type="email"
                  variant="standard"
                  placeholder="Email"
                  color="secondary"
                  fullWidth
                  name="email" 
                  helperText={<ErrorMessage name="email" component="span"/>}
    
                />
                <Field
                  as={TextField}
                  margin="normal"
                  type="email"
                  variant="standard"
                  placeholder="Email Confirmation"
                  color="secondary"
                  fullWidth
                  name="emailConfirmation"
                  helperText={<ErrorMessage name="emailConfirmation" component="span"/>}
    
                />
                <Field
                  as={TextField}
                  margin="normal"
                  type="password"
                  variant="standard"
                  placeholder="Password"
                  color="secondary"
                  fullWidth
                  name="password"
                  helperText={<ErrorMessage name="password" component="span"/>}
                />
                <Field
                  as={TextField}
                  margin="normal"
                  type="password"
                  variant="standard"
                  placeholder="Password Confirmation"
                  color="secondary"
                  fullWidth
                  name="passwordConfirmation"
                  helperText={<ErrorMessage name="passwordConfirmation" component="span"/>}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "1.5rem" }}
                  disabled={props.isSubmitting}
                >{props.isSubmitting? "Loading" : "Register"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      );
    }
    
    export default UserRegistration;

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const navigate= useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setError(null);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setError(null);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setError(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Front-end validation
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Front-end validation to prevent duplicate registration
//     const existingUser = await checkExistingUser(email);
//     if (existingUser) {
//       setError('User with this email already exists');
//       return;
//     }

//     // Backend registration
//     const formData = { email, password };

//     try {
//       const response = await fetch('http://localhost:8080/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSuccessMessage('Registration successful!');
//       } else {
//         setError('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setError('Registration failed');
//     }
//   };

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

//   return (
//     <div className="form">
//       <h1>User Registration</h1>

//       <div className="messages">
//         {error && <div className="error">{error}</div>}
//         {successMessage && <div className="success">{successMessage}</div>}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input type="text" value={email} onChange={handleEmailChange} required />

//         <label>Password</label>
//         <input type="password" value={password} onChange={handlePasswordChange} required />

//         <label>Confirm Password</label>
//         <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default UserRegistration;

