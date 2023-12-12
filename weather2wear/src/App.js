import { Link } from 'react-router-dom';
import './App.css';
import './Pages/userHomepage.js'
import Header from './Components/Header.js';
import LoginForm from './Pages/LoginForm.js';
import CreateAccount from './Pages/CreateAccount.js';
import { Component } from 'react';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <LoginForm/>
      <CreateAccount/>
<div buttons>

<button name="logInButton" id="logInButton">Log in to Your Account</button>

<br/> <br/> 
<a href="./Components/CreateAccount.js"/>
<button name="createAccountButton">Create Account</button>

</div>
    </div>
  );
}

export default App;
 