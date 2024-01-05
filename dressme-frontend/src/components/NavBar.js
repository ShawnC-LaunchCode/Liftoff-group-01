import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <>
        <ul>
            <li><Link to="/HomePage">Home</Link></li>
            <li><Link to="/cloths">Clothes</Link></li> 
            <li><Link to="/MyCloset">My Closet</Link></li>
            <li><Link to="/HomePage">My Outfits</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/Settings">Settings</Link></li>
            <li><Link to="/Notifications">Notifications</Link></li>
            <li><Link to="/LogOut">Log Out</Link></li>
        </ul>
        </>
    )
}