import React from 'react';
import food from './food_icon.png';
import water from './water_drop.png'
import { Map, GoogleApiWrapper, Marker, Size } from 'google-maps-react';

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