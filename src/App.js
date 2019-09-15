import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import food from './food_icon.png'
import logo from './logo.png'
import MapContainer from "./MapContainer";
import { Filter } from './components/Filter/Filter';
import './App.sass';
import './App.css';

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
            <img href="#" class="navbar-item" src={logo}></img>
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
        <div class="column is-3 section" style={{ paddingTop: 15 }}>
          <input className="input is-full-width is-size-5" style={{ marginBottom: 10 }} type="text" placeholder="Search" />
          <Filter handleToggle={this.handleFilterToggle.bind(this)} filter={this.state}/>
        </div>
        <div class="column" style={{ padding: 0 }}>
          <MapContainer filter={this.state}/>
        </div>
        
      </div>

    </div>
    );
  }
}


export default App;
