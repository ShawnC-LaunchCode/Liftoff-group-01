
import './App.css';


import { useState,useEffect } from 'react';
import Addclothcategory from './cloth/Addclothcategory';
import ListClothCategory from './cloth/ListClothCategory';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editclothcategory from './cloth/Editclothcategory';
import ListCloths from './cloth/ListCloths';
import Addcloths from './cloth/Addcloths';
import Editcloths from './cloth/Editcloths';
import Searchfilter from './cloth/Searchfilter';
import WeatherApp from './Weather/WeatherApp';
import SearchCities from './Weather/SearchCities';


import Login from './Pages/Login.js';
import Register from './Pages/Register.js';


import Home from './Pages/Home.js';
import Events from './Pages/Events.js';
import LogOut from './Pages/LogOut.js';
import MyCloset from './Pages/MyCloset.js';
import Notifications from './Pages/Notifications.js';
import Settings from './Pages/Settings.js';
import Userpage from './Pages/Userpage';





function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<Userpage />} /> 
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/LogOut" element={<LogOut/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/MyCloset" element={<MyCloset/>} />

          <Route path='/listclothcategory' element={<ListClothCategory />}></Route>
          <Route path='/cloths' element={<ListCloths />}></Route>
          <Route path='/cloths/create' element={<Addcloths />}></Route>
          <Route path='/cloths/search' element={<Searchfilter />}></Route>
          <Route path='/cloths/edit/:c_id' element={<Editcloths />}></Route>
          <Route path='/clothcategory/create' element={<Addclothcategory />}></Route>
          <Route path='/clothcategory/edit/:cid' element={<Editclothcategory />}></Route> 
          <Route path='/weather' element={<WeatherApp />}></Route>
          <Route path='/searchcities' element={<SearchCities />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
