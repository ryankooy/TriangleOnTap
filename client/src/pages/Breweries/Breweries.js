import React, { Component } from "react";
import API from "../../utils/API";
import MapContainer from '../../components/Map';
import BrewLists from '../../components/BrewLists';
import { Col, Container } from "../../components/Grid";
import CardBtn from "../../components/CardBtn";
import BrewerySearch from "../../components/BrewSearch";
import { Marker, InfoWindow } from 'google-maps-react';
import "./style.css";
import beer from '../../assets/images/beer.svg';


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
    selectedPlace: {},
    selected: false
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

  onMarkerHover = (props, marker) =>
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
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBreweries({ city: this.state.search })
      .then(res => {
        console.log(res);
        
        this.loadBreweries();
      })
      .catch(err => console.log(err));
  };

  handleSaveClick = event => {
    event.preventDefault();
    const selectedButton = event.target;
    const updatedElement = selectedButton !== "button" ? selectedButton.closest("button") : selectedButton
    
    const selectedBreweryId = parseInt(updatedElement.getAttribute("data-id"));
    console.log(selectedBreweryId, updatedElement);
    console.log(event.target);
    console.log(this.state.breweries);

    this.setState({ selected: true });
    
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
  };

  citySearch = thisCity => {
    console.log(thisCity);
    API.searchBreweries({ city: thisCity })
      .then(res => {
        console.log(res.data);
        this.setState({
          breweries: res.data
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state);

    return (
      <div style={{margin: 30, padding: 30}}>
      <Container>
          <Col>
            <h1 align="center">Beer Search</h1>
            <div align="center">
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Raleigh")}>Raleigh</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Durham")}>Durham</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Cary")}>Cary</CardBtn>
              <CardBtn style={{margin: 10}} onClick={() => this.citySearch("Chapel Hill")}>Chapel Hill</CardBtn>
            </div>
            <Col>
            <div>
              <BrewerySearch onClick={this.handleSaveClick}/>
            </div>
          </Col>
          </Col>
      </Container>

      <Container>
          <Col>            
            <MapContainer>
              {this.displayMarkers()}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              />
            </MapContainer>            
          </Col>

          <Col>        
          <BrewLists breweries={this.state.breweries} 
                     onClick={this.handleSaveClick} />
      </Col>
          
      </Container>
      </div>


      // {/* // <Container fluid>
      // //   <Row>
      // //     <Col size="md-6">
      // //       <Jumbotron>
      // //         <h1>Breweries</h1>
      // //       </Jumbotron>
      // //       <form>
      // //         <Input
      // //           value={this.state.name}
      // //           onChange={this.handleInputChange}
      // //           name="name"
      // //           placeholder="Name (required)"
      // //         />
      // //         <Input
      // //           value={this.state.city}
      // //           onChange={this.handleInputChange}
      // //           name="city"
      // //           placeholder="City (required)"
      // //         />
      // //         <TextArea
      // //           value={this.state.date}
      // //           onChange={this.handleInputChange}
      // //           name="date"
      // //           placeholder="Date (Optional)"
      // //         />
      // //         <FormBtn
      // //           disabled={!(this.state.name && this.state.city)}
      // //           onClick={this.handleFormSubmit}
      // //         >
      // //           Submit Brewery
      // //         </FormBtn>
      // //       </form>
      // //     </Col>
      // //     <Col size="md-6 sm-12">
      // //       <Jumbotron>
      // //         <h1>Breweries On My List</h1>
      // //       </Jumbotron>
      // //       {this.state.breweries.length ? (
      // //         <List>
      // //           {this.state.breweries.map(brewery => (
      // //             <ListItem key={brewery._id}>
      // //               <Link to={"/breweries/" + brewery._id}>
      // //                 <strong>
      // //                   {brewery.name} by {brewery.city}
      // //                 </strong>
      // //               </Link>
      // //               <DeleteBtn onClick={() => this.deleteBrewery(brewery._id)} />
      // //             </ListItem>
      // //           ))}
      // //         </List>
      // //       ) : (
      // //         <h3>No Results to Display</h3>
      // //       )}
      // //     </Col>
      // //   </Row>
      // // </Container> */}
    );
  }
}

export default Breweries;
