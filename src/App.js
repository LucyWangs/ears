import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import food from './food_icon.png'
import logo from './logo.png'
import MapContainer from "./MapContainer";
import './App.sass';
import './App.css';

function App() {
  var styleName = {
    fontWeight: "bold",
    fontSize: 30
  }

  var styleNavBar = {
    marginLeft: '50px;'
  }
  
  return (
      <div className="App">
        
          <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div id="navMenu" class="navbar-menu">
              <div class="navbar-brand">
                {/* <a href="#" class="navbar-item is-active">Home</a> */}
                <img href="#" class="navbar-item" src={logo}></img>
                <a href="#" class="navbar-item" style={styleName}>EARS</a>
              </div>
              <div class="navbar-end">
                <a to="/about/" class="navbar-item" style = {styleNavBar}>About</a>
                
                <div class="buttons">
                    <a class="button" style = {styleNavBar}>Donate</a>
                </div>
              </div>
            </div>
          </nav>
        <div class="row">
          <div class="columnLeft">
            <input className="input" type="text" placeholder="Search" />
          </div>
          <div class="column">
            <MapContainer/>
          </div>
          
        </div>
      </div>
  );
}


export default App;
