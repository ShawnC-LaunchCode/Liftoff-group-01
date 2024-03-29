import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useState} from "react";
import { Link} from "react-router-dom";

export default function LogOut(){

    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout logic here, such as making a request to the Spring Boot backend
        // to invalidate the user session.
    
        // For example, you can use the fetch API to send a logout request to your backend.
        fetch('http://localhost:8080/logout', {
          method: 'POST',
          credentials: 'include', // Include credentials for cross-origin requests
        })
          .then(response => {
            if (response.ok) {
              // Redirect to the login page or any other desired page after successful logout
              navigate('/login');
            } else {
              // Handle logout failure
              console.error('Logout failed');
            }
          })
          .catch(error => {
            console.error('Logout error:', error);
          });
      }, [navigate]);
    return(
        <>
        
        </>
    )
}