import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SetEverydayDresscode from "../components/SetEverydayDresscode";
import SetStyle from "../components/SetStyle";
import ZipcodeForm from "../components/ZipcodeForm";


export default function Settings(){
    return(
        <>
        <NavBar />
        <Header/>
        <h2>Settings</h2>

        <SetEverydayDresscode />
        <SetStyle />
        <ZipcodeForm/>
        </>
    )
}