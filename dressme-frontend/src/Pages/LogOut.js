import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogOut(){
    const navigate=useNavigate();
    useEffect(() => {
        window.sessionStorage.setItem("loggedIn", null);
        window.sessionStorage.setItem("username", null);
        //this.setState(this.state);
        navigate("/");
      }, []);

    return(
        <>
        
        </>
    )
}