const axios = require("axios");
const db = require("../models");

// Defining methods for the breweriesController
module.exports = {
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
                console.log(filtered),
                res.json(filtered)
                db.Brewery.insertMany({ filtered })
                .then(dbBrewery => {
                    return db.User.findOneAndUpdate({ id: req.user._id }, { $push: { breweries: dbBrewery._id }}, { new: true} );
                })
                .then((dbUser) => {
                    res.json(dbUser);
                })
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err))
        }
    },
    searchChapelHill: function(req, res) {
        if(req.user) {
            axios.get("https://api.openbrewerydb.org/breweries/search?query=chapel%20hill")
            .then(results => {
                const filtered = results.data.filter(
                    result =>
                    result.name &&
                    result.city &&
                    result.longitude &&
                    result.latitude &&
                    result.state === "North Carolina"
                );
                res.json(filtered)
                db.Brewery.insertMany({ filtered })
                .then(dbBrewery => {
                    return db.User.findOneAndUpdate({ id: req.user._id }, { $push: { breweries: dbBrewery._id }}, { new: true} );
                })
                .then((dbUser) => {
                    res.json(dbUser);
                })
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err))
        }
    },
    searchDurham: function(req, res) {
        if(req.user) {
            axios.get("https://api.openbrewerydb.org/breweries/search?query=durham")
            .then(results => {
                const filtered = results.data.filter(
                    result =>
                    result.name &&
                    result.city &&
                    result.longitude &&
                    result.latitude &&
                    result.state === "North Carolina"
                );
                res.json(filtered)
                db.Brewery.insertMany({ filtered })
                .then(dbBrewery => {
                    return db.User.findOneAndUpdate({ id: req.user._id }, { $push: { breweries: dbBrewery._id }}, { new: true} );
                })
                .then((dbUser) => {
                    res.json(dbUser);
                })
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err))
        }
    },
    searchChapelHill: function(req, res) {
        if(req.user) {
            axios.get("https://api.openbrewerydb.org/breweries/search?query=raleigh")
            .then(results => {
                const filtered = results.data.filter(
                    result =>
                    result.name &&
                    result.city &&
                    result.longitude &&
                    result.latitude &&
                    result.state === "North Carolina"
                );
                res.json(filtered)
                db.Brewery.insertMany({ filtered })
                .then(dbBrewery => {
                    return db.User.findOneAndUpdate({ id: req.user._id }, { $push: { breweries: dbBrewery._id }}, { new: true} );
                })
                .then((dbUser) => {
                    res.json(dbUser);
                })
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err))
        }
    },

    // searchArea: function(req, res) {
    //     console.log("distance", req.body);
    //     const radius = parseFloat(req.body);
    //     const radians = radius / 3963.2;

    //     db.Brewery.find({
    //         location: { $geoWithin: { $centerSphere: [ [ -88, 30 ], radians.toFixed(2) ] } }
    //     })
    // }
};
