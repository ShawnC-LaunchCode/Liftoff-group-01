import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <Header/>
        <h1>Home Page</h1>
        <div buttons>
<a href="/Login">
<button name="logInButton" id="logInButton" >Log in to Your Account</button>
</a>


<br/> <br/> 
<a href= "/Register">
<button name="createAccountButton" >Create Account</button>
</a>


</div> 
        </>
    )
}