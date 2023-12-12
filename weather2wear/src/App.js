import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './Pages/userHomepage.js'
import Header from './Components/Header.js';
import LoginForm from './Pages/LoginForm.js';
import CreateAccount from './Pages/CreateAccount.js';
import userHomepage from './Pages/userHomepage.js';
import { Component } from 'react';
import './Pages/userHomepage.js'
import Home from './Pages/Home.js';


function App() {
  
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/HomePage" element={<userHomepage/>} />
      </Routes>
    
{/* <div buttons>

<button name="logInButton" id="logInButton">Log in to Your Account</button>

<br/> <br/> 
<button name="createAccountButton">Create Account</button>

</div> */}
    </div>
  );
}

export default App;
 