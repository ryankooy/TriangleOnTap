import axios from "axios";

export default {
  // Gets all books
  getBreweries: function() {
    return axios.get("/api/breweries");
  },
  // Gets the book with the given id
  getBrewery: function(id) {
    return axios.get("/api/brewery/" + id);
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
