import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '50%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   stores: [{latitude: 35.769929, longitude: -78.856209},
    //     {latitude: 35.837034, longitude: -78.850716},
    //     {latitude: 35.832581, longitude: -78.723343}]
    // }
  }

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},
    name: "",
    city: ""
  };

  onMarkerClick = (props, marker) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 35.85,
        lng: -78.89
      }}
      > 
        { this.props.children }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDx4yZ891jmKjF05SC3ohnK6eWIlOrYoiQ'
})(MapContainer);
