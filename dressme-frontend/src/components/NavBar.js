import React from "react";
import { Link } from "react-router-dom";
import Home from './Pages/Home.js';
import Events from './Pages/Events.js';
import LogOut from './Pages/LogOut.js';
import MyCloset from './Pages/MyCloset.js';
import Notifications from './Pages/Notifications.js';
import Settings from './Pages/Settings.js';
import Userpage from './Pages/Userpage';


export default function NavBar(){
    return(

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/Userpage">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link" href="/cloths">My Clothes</a>
             </li>
          <li class="nav-item">
            <a class="nav-link" href="/MyCloset">My Closet</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Events">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Settings">Settings</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="/Notifications">Notifications</a>
           </li>
           <li class="nav-item">
              <a class="nav-link" href="/LogOut">Logout</a>
            </li>
        </ul>
      </div>
    </nav>
//        <>
//        <ul>
//            <li><Link to="/HomePage">Home</Link></li>
//            <li><Link to="/cloths">Clothes</Link></li>
//            <li><Link to="/MyCloset">My Closet</Link></li>
//            <li><Link to="/HomePage">My Outfits</Link></li>
//            <li><Link to="/Events">Events</Link></li>
//            <li><Link to="/Settings">Settings</Link></li>
//            <li><Link to="/Notifications">Notifications</Link></li>
//            <li><Link to="/LogOut">Log Out</Link></li>
//        </ul>
//        </>
    )
}