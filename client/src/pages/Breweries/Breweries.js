import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Breweries extends Component {
  state = {
    breweries: [],
    name: "",
    city: "",
    date: ""
  };

  componentDidMount() {
    this.loadBreweries();
  }

  loadBreweries = () => {
    API.getBreweries()
      .then(res =>
        this.setState({ breweries: res.data.breweries, name: "", city: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBrewery = id => {
    API.deleteBrewery(id)
      .then(res => this.loadBreweries())
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
    if (this.state.name && this.state.city) {
      API.saveBrewery({
        name: this.state.name,
        city: this.state.city,
        date: this.state.date
      })
        .then(res => this.loadBreweries())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Breweries</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (required)"
              />
              <TextArea
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.city)}
                onClick={this.handleFormSubmit}
              >
                Submit Brewery
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Breweries On My List</h1>
            </Jumbotron>
            {this.state.breweries.length ? (
              <List>
                {this.state.breweries.map(brewery => (
                  <ListItem key={brewery._id}>
                    <Link to={"/breweries/" + brewery._id}>
                      <strong>
                        {brewery.name} by {brewery.city}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBrewery(brewery._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Breweries;
