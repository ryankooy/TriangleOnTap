const axios = require("axios");
const db = require("../models");

// Defining methods for the breweriesController
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
    // searchArea: function(req, res) {
    //     console.log("distance", req.body);
    //     const radius = parseFloat(req.body);
    //     const radians = radius / 3963.2;

    //     db.Brewery.find({
    //         location: { $geoWithin: { $centerSphere: [ [ -88, 30 ], radians.toFixed(2) ] } }
    //     })
    // }
};