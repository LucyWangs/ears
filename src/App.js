import React from 'react';
import logo from './logo.svg';
import MapContainer from "./MapContainer";
import { Columns } from 'react-bulma-components';
import './App.sass';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <a href="#" class="navbar-item is-active">Home</a>
            <a href="#" class="navbar-item">About</a>
            <a href="#" class="navbar-item">Search</a>
            <div class="buttons">
                <a class="button">Donate</a>
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
