import React from "react";
import { Link } from "react-router-dom";
import userHomepage from "../Pages/UserHomepage";

export default function NavBar(){
    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/Home">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">Hello!</span>
  </button>
        <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/HomePage">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Notifications">Notifications</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/LogOut">LogOut</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/MyCloset">My Closet</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Events">Events</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Settings">Settings</a>
      </li>
    </ul>
  </div>

        </nav>

       
       
    
    )
}