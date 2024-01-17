
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

//import Userhomepage from './Pages/Userhomepage';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';

import Home from './Pages/Home.js';
import Events from './Pages/Events.js';
import LogOut from './Pages/LogOut.js';
import MyCloset from './Pages/MyCloset.js';
import Notifications from './Pages/Notifications.js';
import Settings from './Pages/Settings.js';
import Userpage from './Pages/Userpage';
import Cweather from './Weather/Cweather';
import Checkweather from './Weather/Checkweather';
import Sample from './Weather/Sample';
import NavBar from './components/NavBar';
import Forecast from './Weather/Forecast';
<<<<<<< HEAD
import ForgotPassword from './Pages/ForgotPassword.js';
=======
import Wlogin from './Weather/Wlogin';
import LoginRegister from './Weather/LoginRegister';
import ListCloset from './Mycloset/ListCloset';
import AddCloset from './Mycloset/AddCloset';
import EditCloset from './Mycloset/EditCloset';
import Footer from './components/Footer';
import OutfitSuggestion from './Weather/OutfitSuggestion';
>>>>>>> 2c1f5065629a3c6e760cf37f6b24584b5b0a39b0






function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Wlogin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<Userpage />} /> 
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/LogOut" element={<LogOut/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/MyCloset" element={<MyCloset/>} />
<<<<<<< HEAD
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
=======
       
>>>>>>> 2c1f5065629a3c6e760cf37f6b24584b5b0a39b0

          <Route path='/listclothcategory' element={<ListClothCategory />}></Route>
          <Route path='/cloths' element={<ListCloths />}></Route>
          <Route path='/cloths/create' element={<Addcloths />}></Route>
          <Route path='/cloths/search' element={<Searchfilter />}></Route>
          <Route path='/cloths/edit/:c_id' element={<Editcloths />}></Route>
          <Route path='/clothcategory/create' element={<Addclothcategory />}></Route>
          <Route path='/clothcategory/edit/:cid' element={<Editclothcategory />}></Route> 
          <Route path='/weather' element={<WeatherApp />}></Route>
          <Route path='/searchcities' element={<SearchCities />}></Route>
          <Route path='/Cweather' element={<Cweather />}></Route>
          <Route path='/Checkweather' element={<Checkweather />}></Route>
          <Route path='/Sample' element={<Sample/>}></Route>
          <Route path='/Forecast' element={<Forecast/>}></Route>
          <Route path='/Wlogin' element={<Wlogin/>}></Route>
          <Route path='/loginregister' element={<LoginRegister/>}></Route>
          <Route path='/ListCloset' element={<ListCloset/>}></Route>
          <Route path='/AddCloset' element={<AddCloset/>}></Route>
          <Route path='/EditCloset/:c_id' element={<EditCloset/>}></Route>
          <Route path='/OutfitSuggestion' element={<OutfitSuggestion/>}></Route>
         
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
