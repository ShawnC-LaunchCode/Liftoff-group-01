import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function LogOut(){
    return(
        <>
        <NavBar />
        <Header/>
        <h2>Are You Sure You Want to Log Out?</h2>
        </>
    )
}