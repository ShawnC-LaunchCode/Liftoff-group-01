import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand" href="/weather">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
               <li class="nav-item">
                 <a class="nav-link" href="/cloths"><b>Clothes</b></a>
               </li>
            <li class="nav-item">
              <a class="nav-link" href="/MyCloset"><b>My Closet</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Events"><b>Events</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Settings"><b>Settings</b></a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="/Notifications"><b>Notifications</b></a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="/LogOut"><b>Logout</b></a>
              </li>
          </ul>
        </div>
      </nav>
  
    )
}