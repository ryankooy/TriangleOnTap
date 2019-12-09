import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '50%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
      google={this.props.google}
      zoom={9.5}
      style={mapStyles}
      initialCenter={{
        lat: 35.896631,
        lng: -78.789122
      }}
      > 
        { this.props.children }
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDx4yZ891jmKjF05SC3ohnK6eWIlOrYoiQ'
})(MapContainer);
