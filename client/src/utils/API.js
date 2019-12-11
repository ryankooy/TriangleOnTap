import axios from "axios";

export default {
  // Searches the OpenBreweryDB API
  searchBreweries: function(query) {
    return axios.post("/api/search", query)
  },
  // Gets all of the user's breweries
  getBreweries: function() {
    return axios.get("/api/breweries");
  },
  // Gets the brewery with the corresponding id
  getBrewery: function(id) {
    return axios.get("/api/breweries/" + id);
  },
  // Deletes the brewery with the corresponding id
  deleteBrewery: function(id) {
    return axios.delete("/api/breweries/" + id);
  },
  // Saves a brewery and its data to the database
  saveBrewery: function(breweryData) {
    return axios.post("/api/breweries", breweryData);
  },
  saveCoordinates: function(cData) {
    return axios.post("/api/breweries", cData);
  }
};
