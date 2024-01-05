import React from "react";
import Header from "../Components/Header";

export default function Home(){
    return(
        <>
        <Header/>
        <h1>Home Page</h1>
        <div buttons>

<button name="logInButton" id="logInButton">Log in to Your Account</button>

<br/> <br/> 
<button name="createAccountButton">Create Account</button>

</div> 
        </>
    )
}