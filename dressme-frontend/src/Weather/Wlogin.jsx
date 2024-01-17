import React from 'react';
import "./Wlogin.css";
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Wlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validation, valchange] = useState(false);
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();

    try {

      const response = await axios.post('http://localhost:8080/login', { username, password });

      console.log('Response:', response);

      if (response.data.success) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("loggedIn", "true");
        navigate('/weather');
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Username or Password is incorrect');
    }
  };
  return (
    <div>
      <div class="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto ">
        <div class="card card0 border-0">
          <div class="row d-flex">
            <div class="col-lg-5 ">

              <div class="loginlogo"></div>

            </div>
            <div class="col-lg-7">
              <div class="card2 card border-0 px-4 py-5">

                <div class="row px-3">
                  <label class="mb-1"><h6 class="mb-0 text-sm"><b>Username</b></h6></label>
                  <input class="mb-4 text-white" type="text" placeholder="Enter Username" value={username} onMouseDown={e=>valchange(true)}
                    onChange={(e) => setUsername(e.target.value)} />
                  {username.length === 0 && validation && <span className="text-danger">Please enter the Username</span>}
                </div>
                <div class="row px-3">
                  <label class="mb-1"><h6 class="mb-0 text-sm"><b>Password</b></h6></label>
                  <input class="text-white" type="password" name="password" onMouseDown={e=>valchange(true)} placeholder="Enter password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    {password.length === 0 && validation && <span className="text-danger">Please enter the Password</span>}
                </div>
                <div class="row px-3 mb-4"><div className='col'>
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input id="chk1" type="checkbox" name="chk" class="custom-control-input" />
                    <label for="chk1" class="custom-control-label text-sm">Remember me</label></div>
                </div>
                  <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a> 
                </div>
                <div class="row mb-3 px-3">
                  <div class="col text-center">
                    <button className="btn btn-primary" type="submit" onClick={login}>Login</button></div>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Don't have an account? <a class="text-primary " href="/LoginRegister">Register</a></small>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-blue py-4">
            <div class="row px-3">
              <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2024. All rights reserved.</small>
              <div class="social-contact ml-4 ml-sm-auto">
                <span class="fa fa-facebook mr-4 text-sm"></span>
                <span class="fa fa-google-plus mr-4 text-sm"></span>
                <span class="fa fa-linkedin mr-4 text-sm"></span>
                <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Wlogin;