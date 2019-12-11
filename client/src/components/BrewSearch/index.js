import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import Autosuggest from 'react-autosuggest';
import Brewery from './brewery';
import API from '../../utils/API';

const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST || "https://api.openbrewerydb.org";

function getSuggestionValue(suggestion) {
  return suggestion.name;
};

function renderSuggestion(suggestion) {
  return (
      <span className="text-lg p-4">
        {suggestion.name}
      </span>
  );
};

class BrewerySearch extends Component {
  constructor() {
    super();
    this.debouncedGetSuggestions = debounce(500, this.getSuggestions);
    this.state = {
      value: '',
      brewery: {},
      suggestions: []
    }
  };

  getSuggestions = value => {
    const params = { query: value }
    axios.get(`${API_SERVER_HOST}/breweries/search?query=`, { params: params })
      .then(res => {
        const filtered = res.data.filter(res =>
          res.name &&
          res.city &&
          res.longitude &&
          res.latitude &&
          res.state === "North Carolina"
        );
        this.setState({ suggestions: filtered });
      })
        .catch(error => {
          this.setState({ suggestions: [] })
        })
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.debouncedGetSuggestions(value)
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const brewery = suggestion;
    axios.get(`${API_SERVER_HOST}/breweries/${brewery.id}`)
      .then(res => {
        this.setState({ brewery: res.data })
      })
        .catch(error => {})
  };

  handleSaveClick = event => {
    event.preventDefault();
    const selectedButton = event.target;
    const updatedElement = selectedButton !== "button" ? selectedButton.closest("button") : selectedButton;
    const selectedBreweryId = parseInt(updatedElement.getAttribute("data-id"));
    
    API.saveBrewery({
      name: this.state.brewery.name,
      street: this.state.brewery.street,
      city: this.state.brewery.city,
      state: this.state.brewery.state,
      phone: this.state.brewery.phone,
      website_url: this.state.brewery.website_url,
      latitude: parseFloat(this.state.brewery.latitude),
      longitude: parseFloat(this.state.brewery.longitude)
    })
  };

  render() {

    const { brewery, suggestions, value } = this.state;
    const inputProps = {
      placeholder: 'Search Breweries Here',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="mb-4" align="center">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
        <Brewery brewery={this.state.brewery}
                 onClick={this.handleSaveClick}
        />
      </div>
    );
  };
};

export default BrewerySearch;
