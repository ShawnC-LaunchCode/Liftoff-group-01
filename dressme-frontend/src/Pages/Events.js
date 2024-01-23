import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Calendar from "../calendar/Calendar";

export default function Events(){
    return(
        <>
        <NavBar />
        <Header/>
        <h2>Upcoming Events</h2>

        <Calendar />
        </>
    )
}