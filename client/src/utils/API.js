import axios from "axios";

export default {
  // Search breweries on the Openbrewerydb API
  searchBreweries: function(query) {
    return axios.post("/api/search", query)
  },
  // Gets all books
  getBreweries: function() {
    return axios.get("/api/breweries");
  },
  // Gets the book with the given id
  getBrewery: function(id) {
    return axios.get("/api/breweries/" + id);
  },
  // Deletes the book with the given id
  deleteBrewery: function(id) {
    return axios.delete("/api/breweries/" + id);
  },
  // Saves a book to the database
  saveBrewery: function(breweryData) {
    return axios.post("/api/breweries", breweryData);
  }
};
