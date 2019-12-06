import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import MapContainer from '../../components/Map';
import BrewLists from '../../components/BrewLists';
import { Col, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import CardBtn from "../../components/CardBtn";
import BrewSearch from "../../components/BrewSearch";
import "./style.css";

class Breweries extends Component {
  state = {
    breweries: [],
    search: "",
    name: "",
    street: "",
    city: "",
    latitude: "",
    longitude: "",
    phone: ""
  };

  // componentDidMount() {
  //   this.loadBreweries();
  // }

  loadBreweries = () => {
    API.getBreweries()
      .then(res => {
        console.log(res.data);
        this.setState({ breweries: res.data })
        res.data.map(element => {
          this.convertGeoJson(element);
        })
      })
      .catch(err => console.log(err));
  };

  deleteBrewery = id => {
    API.deleteBrewery(id)
      .then(res => this.loadBreweries())
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
  }

  handleSave = () => {
    API.saveBrewery({
      name: this.state.name,
      street: this.state.street,
      city: this.state.city,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  handleCary = event => {
    event.preventDefault();
    console.log("cary");
    API.searchBreweries({ city: "Cary" })
    .then(res => {
      console.log(res.data);
      this.setState({
        breweries: res.data
      });
      res.data.map(element => 
        this.convertGeoJson(element)
      );
    })
      .catch(err => console.log(err))
  }

  handleChapelHill = event => {
    event.preventDefault();
    console.log("chapel hill");
    API.searchBreweries({ city: "Chapel Hill" })
    .then(res => {
      console.log(res.data);
      this.setState({
        breweries: res.data
      });
      res.data.map(element =>
        this.convertGeoJson(element)
      );
    })
    .catch(err => console.log(err))
  }

  handleRaleigh = event => {
    event.preventDefault();
    console.log("raleigh");
    API.searchBreweries({ city: "Raleigh" })
    .then(res => {
      console.log(res.data);
      this.setState({
        breweries: res.data
      });
      res.data.map(element => 
        this.convertGeoJson(element)
      );
    })
      .catch(err => console.log(err));
  }

  handleDurham = event => {
    event.preventDefault();
    console.log("durham");
    API.searchBreweries({ city: "Durham" })
    .then(res => {
      console.log(res.data);
      this.setState({
        breweries: res.data
      });
      res.data.map(element => 
        this.convertGeoJson(element)
      );
    })
      .catch(err => console.log(err));
  }

  convertGeoJson = brewery => {
    // console.log(lat + " | " + long);

    const geoJ = {
      "name": brewery.name,
      "city": brewery.city,
      "location": {
          "type": "Point",
          "coordinates": [
              parseFloat(brewery.longitude),
              parseFloat(brewery.latitude)
          ]
      }
    }
    console.log(geoJ);
  }

  render() {
    console.log(this.state);
    return (
      <div style={{margin: 30, padding: 30}}>
      <Container>
          <Col>
            <h1 align="center">Beer Search</h1>
            <div align="center">
              <CardBtn style={{margin: 10}} onClick={this.handleRaleigh}>Raleigh</CardBtn>
              <CardBtn style={{margin: 10}} onClick={this.handleDurham}>Durham</CardBtn>
              <CardBtn style={{margin: 10}} onClick={this.handleCary}>Cary</CardBtn>
              <CardBtn style={{margin: 10}} onClick={this.handleChapelHill}>Chapel Hill</CardBtn>
            </div>
            <Col>
            <div>
              <BrewSearch />
            </div>
          </Col>
          </Col>
      </Container>

      <Container>
          <Col>            
            <MapContainer />            
          </Col>

          <Col>        
          {/* <BrewLists />   */}
      </Col>
          
      </Container>
      </div>


      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
      //       <Jumbotron>
      //         <h1>Breweries</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input
      //           value={this.state.name}
      //           onChange={this.handleInputChange}
      //           name="name"
      //           placeholder="Name (required)"
      //         />
      //         <Input
      //           value={this.state.city}
      //           onChange={this.handleInputChange}
      //           name="city"
      //           placeholder="City (required)"
      //         />
      //         <TextArea
      //           value={this.state.date}
      //           onChange={this.handleInputChange}
      //           name="date"
      //           placeholder="Date (Optional)"
      //         />
      //         <FormBtn
      //           disabled={!(this.state.name && this.state.city)}
      //           onClick={this.handleFormSubmit}
      //         >
      //           Submit Brewery
      //         </FormBtn>
      //       </form>
      //     </Col>
      //     <Col size="md-6 sm-12">
      //       <Jumbotron>
      //         <h1>Breweries On My List</h1>
      //       </Jumbotron>
      //       {this.state.breweries.length ? (
      //         <List>
      //           {this.state.breweries.map(brewery => (
      //             <ListItem key={brewery._id}>
      //               <Link to={"/breweries/" + brewery._id}>
      //                 <strong>
      //                   {brewery.name} by {brewery.city}
      //                 </strong>
      //               </Link>
      //               <DeleteBtn onClick={() => this.deleteBrewery(brewery._id)} />
      //             </ListItem>
      //           ))}
      //         </List>
      //       ) : (
      //         <h3>No Results to Display</h3>
      //       )}
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Breweries;
