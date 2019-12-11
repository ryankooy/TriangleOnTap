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

    handleDelete = id => {
        API.deleteBrewery(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
            
                <Container>
                <Col>
                <h1 align="center">Favorite breweries</h1>
                <h5 align="center">Keep track your favorite breweries</h5>
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