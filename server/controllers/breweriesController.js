const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the breweriesController
module.exports = {

  // Finds and returns the user's saved breweries
  findAll: function(req, res) {
    db.Brewery
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate({ path: "breweries", options: { sort: { 'date': -1 } } })
        .then(users => {
          res.json({ breweries: users[0].breweries });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ breweries: null });
    }
  },

  // Finds and returns a brewery by its corresponding ID
  findById: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate("breweries")
        .then(users => {
          const brewery = users[0].breweries.filter(b => b._id.toString() === req.params.id);
          res.json({ brewery: brewery[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ brewery: null });
    }
  },

  // Creates a brewery data entry and saves that entry to the user's breweries
  create: function(req, res) {
    console.log(req.body);
    console.log(req.user._id);
    db.Brewery
      .create(req.body)
      .then(dbBrewery => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { breweries: dbBrewery._id } }, { new: true });
      })
      .then((dbUser) => {

        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },

  createCoordinates: function(req, res) {
    console.log(req.body);
    db.Coordinates
      .create(req.body)
      // .then(dbBrewery => {
      //   return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { breweries: dbBrewery._id } }, { new: true });
      // })
      .then((dbCoordinates) => {
        res.json(dbCoordinates);
      })
      .catch(err => res.status(422).json(err));
  },

  // Updates the data of brewery with corresponding ID
  update: function(req, res) {
    db.Brewery
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // Removes a brewery from the user's saved breweries list
  remove: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { breweries: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Brewery
          .findOneAndDelete({ _id: req.params.id })
          .then(dbBrewery => res.json(dbBrewery))
          .catch(err => res.status(422).json(err));
      });
  }
};
