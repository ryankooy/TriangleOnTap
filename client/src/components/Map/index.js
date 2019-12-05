import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import API from '../../utils/API';

const mapStyles = {
  width: '40%',
  height: '50%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 35, lng: -78},
              {latitude: 35, longitude: -122.021071}]
    }
  }

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  // handleCary = () => {
  //   console.log("cary");
  //   API.searchBreweries({ city: "Cary" })
  //   .then(res => {
  //     console.log(res.data[0].latitude);

  //     this.setState({
  //       stores: res.data
  //     });
  //     // this.state.stores.map(element => 
  //     //   console.log(element)
  //     //   return element
      
  //     // );
  //     // let arr = [];

  //     // res.data.map(co => {
  //     //   arr.push(co.latitude, co.longitude);
  //     // })

  //     // this.setState({ stores: arr });
  //   })
  //   .catch(err => console.log(err))
  // }

  displayMarkers = () => {
    // API.getBreweries()
    // .then(res => {
    //   this.setState({ stores: res.data })
    //   // res.data.map(element => {
    //   //   this.convertGeoJson(element);
    //   // })
    // })
    // .catch(err => console.log(err));

    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
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
        {this.displayMarkers()}
        {/* <Marker
          onClick={this.onMarkerClick}
          name={'Cary, NC'}
        /> */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          {/* <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div> */}
        </InfoWindow>
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
