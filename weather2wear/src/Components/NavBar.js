import React from "react";
import { Link } from "react-router-dom";
import userHomepage from "../Pages/UserHomepage";

export default function NavBar(){
    return(
        <>
        <ul>
            <li><Link to="/UserHomepage">Home</Link></li>
            <li><Link to="/Notifications">Notifications</Link></li>
            <li><Link to="/LogOut">Log Out</Link></li>
            <li><Link to="/MyCloset">My Closet</Link></li>
            <li><Link to="/Events">Events</Link></li>
        </ul>
        </>
    )
}