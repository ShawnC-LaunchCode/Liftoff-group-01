import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SetEverydayDresscode from "../components/SetEverydayDresscode";
import SetStyle from "../components/SetStyle";
import SetZipCode from "../components/SetZipCode";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Settings(){
    return (
        <>
          <NavBar />
          <Header />
          <div className="container mt-4">
            <h2 className="mb-4">Settings</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-info">
                  <div className="card-body">
                    <h5 className="card-title">Everyday Dress Code</h5>
                    <SetEverydayDresscode />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-success">
                  <div className="card-body">
                    <h5 className="card-title">Style Preferences</h5>
                    <SetStyle />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Zip Code</h5>
                    <SetZipCode />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    