import React from 'react';
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

          <hr/>

          <div class="paragraph">
            EARS is the Emergency Assistance Response System. Our goal is to provide accurate, reliable information about the scope and depth of disasters that have affected different locations. Therefore, organizations such as the Red Cross and other disaster relief efforts know which areas have been deeply affected by different natural disasters and where they can and should focus their efforts.           
            We have three different categories of information that we provide- which regions do not have food/water, which roads or no longer functional, and which regions do not have network. You can choose to display all of these or toggle them until you have the display you would like. 
            Even though some disasters are inevitable, we think it is vital to have an efficient process for providing relief and paving the path for recovery so affected communities can rebuild themselves.
          </div>
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
