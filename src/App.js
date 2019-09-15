import React from 'react';
import logo from './logo.svg';
import food from './food_icon.png'
import MapContainer from "./MapContainer";
import { Filter } from './components/Filter/Filter';
import './App.sass';
import './App.css';
import { brotliDecompress } from 'zlib';

const styleName = {
  fontWeight: "bold",
  fontSize: 30
}

const styleNavBar = {
  marginLeft: '50px;'
}

export class App extends React.Component {
  
  state = {
    resource : true, 
    roads: false, 
    network: false
  }

  handleFilterToggle (property) {
      // const accessor = e.target.getAttribute("property")
      const newState = {}
      const oldState = this.state[property]
      newState[property] = !oldState
      this.setState(newState)
      console.log(newState)
  }
  
  render() {
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
                <a href="http://www.give.org/for-donors/about-specific-giving-guidance/disaster-relief-donations" 
                  class="button" 
                  target="_blank" 
                  style={styleNavBar}>Donate</a>
            </div>
          </div>
            
        </div>

      </nav>
      <div class="row">
        <div class="columnLeft section">
          <input className="input is-full-width" type="text" placeholder="Search" />
          <Filter handleToggle={this.handleFilterToggle.bind(this)} filter={this.state}/>
        </div>
        <div class="column">
          <MapContainer filter={this.state}/>
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
}


export default App;
