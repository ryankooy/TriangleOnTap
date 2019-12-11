import React, { Component } from "react";
import API from "../../utils/API";
import MapContainer from '../../components/Map';
import BrewLists from '../../components/BrewLists';
import { Col, Container, Wrapper } from "../../components/Grid";
import CardBtn from "../../components/CardBtn";
import BrewerySearch from "../../components/BrewSearch";
import { Marker, InfoWindow } from 'google-maps-react';
import "./style.css";
import beer from '../../assets/images/beer.svg';
import logo from '../../assets/images/TriangleOnTap_Logo_Transparent.png';

const logoStyles = {
  display: 'flex',
  height: '15vw',
  width: '15vw', 
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '0px'
}

class Breweries extends Component {
  state = {
    breweries: [],
    search: "",
    name: "",
    street: "",
    city: "",
    latitude: "",
    longitude: "",
    phone: "",
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}
  };

  componentDidMount() {
    this.loadBreweries();
  }

  loadBreweries = () => {
    API.getBreweries()
      .then(res => {
        this.setState({ breweries: res.data.breweries })
      })
      .catch(err => console.log(err));
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    return this.state.breweries.map((element, i) => {
      return <Marker
        key={i}
        id={i}
        position={{
          lat: element.latitude,
          lng: element.longitude
        }}
        icon={beer}
        onClick={this.onMarkerClick}
        name={element.name}
      />
    })
  }

  deleteBrewery = id => {
    API.deleteBrewery(id)
      .then(() => this.loadBreweries())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBreweries({ city: this.state.search })
      .then(res => {
        this.loadBreweries();
      })
      .catch(err => console.log(err));
  };

  handleSaveClick = event => {
    event.preventDefault();

    const selectedButton = event.target;
    const updatedElement = selectedButton !== "button" ? selectedButton.closest("button") : selectedButton;
    const selectedBreweryId = parseInt(updatedElement.getAttribute("data-id"));

    API.saveBrewery({
      name: this.state.breweries[selectedBreweryId].name,
      street: this.state.breweries[selectedBreweryId].street,
      city: this.state.breweries[selectedBreweryId].city,
      state: this.state.breweries[selectedBreweryId].state,
      phone: this.state.breweries[selectedBreweryId].phone,
      website_url: this.state.breweries[selectedBreweryId].website_url,
      latitude: parseFloat(this.state.breweries[selectedBreweryId].latitude),
      longitude: parseFloat(this.state.breweries[selectedBreweryId].longitude)
    })
    .catch(err => console.log(err))

    this.loadBreweries();
  };

  citySearch = thisCity => {
    API.searchBreweries({ city: thisCity })
      .then(res => {
        this.setState({
          breweries: res.data
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Breweries" style={{margin: 30, padding: 30}}>
        <div align="center">
          <img style={logoStyles} src={logo} />
        </div>
        <Wrapper>
          <Col>
            <h4 align="center">Search brewery by city</h4>
            <div align="center">
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Raleigh")}>Raleigh</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Durham")}>Durham</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Cary")}>Cary</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Apex")}>Apex</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Holly Springs")}>Holly Springs</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Fuquay Varina")}>Fuquay-Varina</CardBtn>
            </div>
            <Col>
              <div>
                <BrewerySearch onClick={this.handleSaveClick}/>
              </div>
            </Col>
          </Col>
        </Wrapper>

        <Container>
          <Col>            
            <MapContainer>
              {this.displayMarkers()}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                name={this.state.breweries.name}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </MapContainer>          
          </Col>

          <Col>        
            <BrewLists
              breweries={this.state.breweries} 
              onClick={this.handleSaveClick}
            />
          </Col>
        </Container>
      </div>
    );
  }
}

export default Breweries;
