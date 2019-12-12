const axios = require("axios");

// Defining methods for the API searchController
module.exports = {

    // Queries the OpenBreweryDB API and returns the result to the client
    searchBreweries: function(req, res) {
        if(req.user) {
            axios.get("https://api.openbrewerydb.org/breweries/search?query=" + req.body.search)
            .then(results => {
                const filteredByState = results.data.filter(result => {
                    return result.state === "North Carolina" &&
                           result.latitude &&
                           result.longitude
                });
                const filtered = filteredByState.filter(item => {
                    return item.city === "Raleigh" ||
                           item.city === "Durham" ||
                           item.city === "Cary" ||
                           item.city === "Apex" ||
                           item.city === "Holly Springs" ||
                           item.city === "Fuquay Varina" ||
                           item.city === "Chapel Hill" ||
                           item.city === "Wake Forest" ||
                           item.city === "Hillsborough"
                });
                res.json(filtered);
            })
            .catch(err => res.status(422).json(err))
        }
    }
};
