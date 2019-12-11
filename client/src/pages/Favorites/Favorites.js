import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Container, Wrapper } from "../../components/Grid";
import FavoriteCards from "../../components/Card/FavoriteCards";
import Footer from "../../components/Footer/Footer";


class Favorites extends Component {
    state = {
        breweries: [],
    };

    componentDidMount() {
        this.loadFavorites();
    }

    loadFavorites = () => {
        console.log(this.state.breweries)
        API.getBreweries()
        .then(res => {
            console.log(res.data.breweries);
            this.setState({ breweries: res.data.breweries })
        })
        .catch(err => console.log(err));
    };

    handleDelete = event => {
        event.preventDefault();

        const selectedButton = event.target;
        const updatedElement = selectedButton !== "button" ? selectedButton.closest("button") : selectedButton;

        const selectedBreweryId = updatedElement.getAttribute("data-id");

        console.log(updatedElement, selectedBreweryId);
        console.log(this.state.breweries);

        API.deleteBrewery(selectedBreweryId)
        .catch(err => console.log(err))

        this.loadFavorites();
  };

    render() {
        return (
            <Container>
            
                <Container>
                <Col>
                <h1 align="center">Favorite breweries</h1>
                <h5 align="center">Keep track of your favorite breweries</h5>
                </Col>
                </Container>

                <Wrapper>
                <Container>
                
                <FavoriteCards
                breweries={this.state.breweries}
                onClick={this.handleDelete}
                >
                </FavoriteCards>
                
                </Container>
                </Wrapper>

                
                <Footer />
               
            </Container>
        )
    }


}

export default Favorites;