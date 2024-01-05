import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Home(){
    return(
        <>
        <Header/>
        <h1>Home Page</h1>
        <div buttons>
<a href= "/login">
<button> Log in to Your Account</button>
</a>

<br/> <br/> 
<a href= "/Register">
<button name="createAccountButton">Create Account</button>
</a>


</div> 
        </>
    )
}