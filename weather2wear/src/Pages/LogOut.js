import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

export default function LogOut(){
    return(
        <>
        <NavBar />
        <Header/>
        <h2>Are You Sure You Want to Log Out?</h2>
        </>
    )
}