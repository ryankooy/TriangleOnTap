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
        zoom={9}
        style={mapStyles}
        initialCenter={{
          lat: 35.833842,
          lng: -78.806975
        }}
      > 
        {this.props.children}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDx4yZ891jmKjF05SC3ohnK6eWIlOrYoiQ'
})(MapContainer);
