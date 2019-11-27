import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import Autosuggest from 'react-autosuggest';
import Brewery from './brewery';
import { Button } from "@material-ui/core";

const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST || "https://api.openbrewerydb.org";

function getSuggestionValue(suggestion) {
  return suggestion.name;
};

function renderSuggestion(suggestion) {
  return (
      <Button className="text-lg p-4">
        {suggestion.name}
      </Button>
  );
};

class BrewerySearch extends Component {
  constructor() {
    super();

    this.debouncedGetSuggestions = debounce(500, this.getSuggestions)

    this.state = {
      value: '',
      brewery: {},
      suggestions: []
    }
  }

  getSuggestions = value => {
    const params = { query: value }

    axios.get(`${API_SERVER_HOST}/breweries/autocomplete`, { params: params })
      .then(res => {
        this.setState({ suggestions: res.data });
      })
      .catch(error => {
        this.setState({ suggestions: [] })
      })
  }

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
  }

  render() {
    const { brewery, suggestions, value } = this.state

    const inputProps = {
      placeholder: 'Type a brewery name',
      value,
      onChange: this.onChange,
      className: 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline mb-4'
    };

    return (
      <div className="mb-4">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
        <Brewery brewery={brewery} />
      </div>
    )
  }
}

export default BrewerySearch;
