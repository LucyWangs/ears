import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
              {latitude: 18.029791, longitude: -76.803874}]
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


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{ lat: 18.00681, lng: -77}}
      >
        {this.displayMarkers()}
      </Map>
  );
  }
}

// export default App;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnyI9qIKMopwTsP_u11lbdnEgH-W4U_s0'
})(MapContainer);