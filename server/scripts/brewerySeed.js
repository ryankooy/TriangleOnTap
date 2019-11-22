// DEPENDENCIES =====================
const mongoose = require("mongoose");
const db = require("../models");

// Empty the user DB and insert the information below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/triangleontap"
);

const brewerySeed = [
  {
    "_id" : ObjectId("5801594c4067070bfcb01293"),
    "name" : "Squaw Valley",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            -120.24,
            39.21
        ]
    }
  },
  {
    "_id" : ObjectId("580159634067070bfcb01294"),
    "name" : "Mammoth Lakes",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            -118.9,
            37.61
        ]
    }
  },
  {
    "_id" : ObjectId("580159d94067070bfcb01295"),
    "name" : "Aspen",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            -106.82,
            39.18
        ]
    }
  },
  {
    "_id" : ObjectId("58015a704067070bfcb01296"),
    "name" : "Whistler",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            -122.95,
            50.12
        ]
    }
  }
];

db.Brewery
    .remove({})
    .then(() => db.Brewery.collection.insertMany(brewerySeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1);
    });
