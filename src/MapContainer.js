import React from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 18.006816, lng: -76.800967},
              {latitude: 17.97089, longitude: -76.890864},
              {latitude: 17.959015, longitude: -76.712412},
              {latitude: 18.096774, longitude: -76.809543},
              {latitude: 18.038464, longitude: -77.504587},
              {latitude: 18.029791, longitude: -76.803874}],
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
                  {lat: 17.974969, lng: -76.800062}]]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
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


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{ lat: 18.00681, lng: -77}}
      >
        {this.displayMarkers()}
        {this.displayLines()}
      </Map>
  );
  }
}

// export default App;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnyI9qIKMopwTsP_u11lbdnEgH-W4U_s0'
})(MapContainer);