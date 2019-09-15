import React from 'react';
import logo from './logo.svg';
import food from './food_icon.png'
import MapContainer from "./MapContainer";
import { Columns } from 'react-bulma-components';
import './App.sass';
import './App.css';
import { brotliDecompress } from 'zlib';

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
            <img href="#" class="navbar-item" src={food}></img>
            <a href="#" class="navbar-item" style={styleName}>EARS</a>
            
            
          </div>
          <div class="navbar-end">
            <a href="#" class="navbar-item" style = {styleNavBar}>About</a>
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
      {/* <div className="section">
        <div className="Columns">
          <div className="column">
            <MapContainer/>
            
          </div>
          <div className="column">
            <div className="buttons">
              <a className="button is-primary">Primary</a>
              <a className="button is-link">Link</a>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* <h1 className="title">Bulma</h1>
      <p className="subtitle">
        Modern CSS framework based on{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          Flexbox
        </a>
      </p>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Input" />
        </div>
      </div>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}


export default App;
