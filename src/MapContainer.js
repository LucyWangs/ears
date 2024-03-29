import React from 'react';

import food from './food_icon.png';
import water from './water_drop.png'
import { Map, GoogleApiWrapper, Marker, Polyline, Polygon } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends React.Component{
  constructor(props) {
    super(props);

    var foodImage = {
      url: food,
      size: new this.props.google.maps.Size(25, 26)};

    var waterImage = {
      url: water,
      size: new this.props.google.maps.Size(20, 27)};

    this.state = {
      resources: [{latitude: 18.006816, longitude: -76.800967, pic: foodImage},
              {latitude: 17.97089, longitude: -76.890864, pic: foodImage},
              {latitude: 17.959015, longitude: -76.712412, pic: foodImage},
              {latitude: 18.096774, longitude: -76.809543, pic: foodImage},
              {latitude: 18.038464, longitude: -77.504587, pic: foodImage},
              {latitude: 18.029791, longitude: -76.803874, pic: waterImage},
              {latitude: 17.972734, longitude: -77.607763, pic: waterImage},
              {latitude: 18.167732, longitude: -77.493403, pic: waterImage},
              {latitude: 18.179101, longitude: -77.645785, pic: waterImage}],

      lines: [[{ lat: 18.025406, lng: -76.821931}, 
                {lat: 18.026789, lng: -76.816291}, 
                {lat: 18.027481, lng: -76.811561}, 
                {lat: 18.026269, lng: -76.806104}, 
                {lat: 18.024537, lng: -76.797008}],
                [{lat: 18.002743, lng: -76.818294}, 
                  {lat: 18.007759, lng: -76.811927}, 
                  {lat: 18.009660, lng: -76.799557}, 
                  {lat: 18.013118, lng: -76.790825}],
                [{lat: 18.024921, lng: -76.854274}, 
                  {lat: 17.974969, lng: -76.800062}],
                [{lat: 18.460411, lng: -77.888117},
                  {lat: 18.446815, lng: -77.819340},
                  {lat: 18.449976, lng: -77.802582},
                  {lat: 18.430866, lng: -77.764409},
                  {lat: 18.426390, lng: -77.742970}],
                [{lat: 18.263089, lng: -78.033004},
                  {lat: 18.305390, lng: -78.015693},
                  {lat: 18.324963, lng: -78.009030},
                  {lat: 18.346418, lng: -77.978410}]],
      network_down_polygons: [
          [{lat: 18.462025, lng: -77.451718}, 
            {lat: 18.301318, lng: -77.364611}, 
            {lat: 18.307679, lng: -77.146054},
            {lat: 18.444764, lng: -77.182970}], 
            [{lat: 18.250526, lng: -76.673531},
              {lat: 18.170794, lng: -76.640641},
              {lat: 18.061649, lng: -76.295683},
              {lat: 18.155910, lng: -76.358665}]]
    }
  }

  displayMarkers = () => {
    
      
    return this.state.resources.map((resource, index) => {
      return <Marker key={index} id={index} position={{
       lat: resource.latitude,
       lng: resource.longitude
     }}
     icon= {resource.pic}
     onClick={() => console.log("You clicked me!")} />
    })


  }

  displayLines = () => {
    return this.state.lines.map((line) => {
      return <Polyline 
        path={line}
        geodesic={true}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 1,
          strokeWeight: 7,
      }}
      />
    })
  }

  displayNetworkPolygons = () => {
    return this.state.network_down_polygons.map((polygon) => {
      return <Polygon
        path={polygon}
        key={1}
        options={{
            fillColor: "#000",
            fillOpacity: 0.4,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 1
        }}
        onClick={() => {
            console.log("ahmet")
      }}/>
    })
  }
  render() {
    const {filter} = this.props;
    const { resource, roads, network } = filter; 
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{ lat: 18, lng: -76.8}}
      >
        {resource ? this.displayMarkers() : ''}
        {roads ? this.displayLines() : '' }
        {network ? this.displayNetworkPolygons() : ''}
      </Map>
  );
  }
}

// export default App;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnyI9qIKMopwTsP_u11lbdnEgH-W4U_s0'
})(MapContainer);