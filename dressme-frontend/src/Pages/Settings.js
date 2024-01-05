import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import SetEverydayDresscode from "../Components/SetEverydayDresscode";
import SetStyle from "../Components/SetStyle";


export default function Settings(){
    return(
        <>
        <NavBar />
        <Header/>
        <h2>Settings</h2>

        <SetEverydayDresscode />
        <SetStyle />
        </>
    )
}