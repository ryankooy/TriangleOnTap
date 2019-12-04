import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import API from '../../utils/API';

const mapStyles = {
  width: '40%',
  height: '50%'
};

export class MapContainer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
  //             {latitude: 47.359423, longitude: -122.021071},
  //             {latitude: 47.2052192687988, longitude: -121.988426208496},
  //             {latitude: 47.6307081, longitude: -122.1434325},
  //             {latitude: 47.3084488, longitude: -122.2140121},
  //             {latitude: 47.5524695, longitude: -122.0425407}]
  //   }
  // }

  state = {
    latitude: "",
    longitude: "",
    stores: []
  //   showingInfoWindow: false,  //Hides or the shows the infoWindow
  //   activeMarker: {},          //Shows the active marker upon click
  //   selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  handleCary = () => {
    console.log("cary");
    API.searchBreweries({ city: "Cary" })
    .then(res => {
      console.log(res.data);
      let arr = [];

      res.data.map(co => {
        arr.push(co.latitude, co.longitude);
      })

      this.setState({ stores: arr });
    })
    .catch(err => console.log(err))
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

  // onMarkerClick = (props, marker, e) =>
  // this.setState({
  //   selectedPlace: props,
  //   activeMarker: marker,
  //   showingInfoWindow: true
  // });

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

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
        {this.handleCary()}
        {this.displayMarkers()}
        {/* <Marker
          onClick={this.onMarkerClick}
          name={'Cary, NC'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        > */}
          {/* <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div> */}
        {/* </InfoWindow> */}
        {/* <Circle
          radius={1200}
          center={this.selectedPlace}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
        /> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDx4yZ891jmKjF05SC3ohnK6eWIlOrYoiQ'
})(MapContainer);
