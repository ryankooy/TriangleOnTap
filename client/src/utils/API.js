import axios from "axios";

export default {
  // Search  on the OpenBreweryDB API
  searchBreweries: function(query) {
    return axios.post("/api/search", query)
  },
  // Gets all breweries
  getBreweries: function() {
    return axios.get("/api/breweries");
  },
  // Gets the brewery with the given id
  getBrewery: function(id) {
    return axios.get("/api/breweries/" + id);
  },
  // Deletes the brewery with the given id
  deleteBrewery: function(id) {
    return axios.delete("/api/breweries/" + id);
  },
  // Saves a brewery  to the database
  saveBrewery: function(breweryData) {
    return axios.post("/api/breweries", breweryData);
  },
  saveCoordinates: function(cData) {
    return axios.post("/api/breweries", cData);
  }
};
