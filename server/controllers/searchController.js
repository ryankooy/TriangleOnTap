const axios = require("axios");

// Defining methods for the booksController
module.exports = {
    searchBreweries: function(req, res) {
        console.log("body", req.body.city);
        axios.get("https://api.openbrewerydb.org/breweries/search?query=" + req.body.city)
        .then(results => {
           const filtered = results.data.filter(
                result =>
                result.name &&
                result.city &&
                result.longitude &&
                result.latitude
            );
            console.log(filtered),
            res.json(filtered)
        })
        .catch(err => console.log(err));
    }
};
