const axios = require("axios");

// Defining methods for the API searchController
module.exports = {

    // Queries the OpenBreweryDB API and returns the result to the client
    searchBreweries: function(req, res) {
        if(req.user) {
            axios.get("https://api.openbrewerydb.org/breweries/search?query=" + req.body.city)
            .then(results => {
                const filtered = results.data.filter(
                    result =>
                    result.name &&
                    result.city &&
                    result.longitude &&
                    result.latitude &&
                    result.state === "North Carolina"
                );
                res.json(filtered);
            })
            .catch(err => res.status(422).json(err))
        }
    }
};
