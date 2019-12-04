// DEPENDENCIES =====================
const mongoose = require("mongoose");
const db = require("../models");

// Empty the user DB and insert the information below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://user:admin1@ds037155.mlab.com:37155/heroku_trz1rz2v"
);

const brewerySeed = [
    {
        name: "Marriott Bar",
        city: "Cary",
        // location: {
        //     "type": "Point",
        //     "coordinates": [
        //         -78.89,
        //         35.85
        //     ]
        // },
        street: "1229 Perry Rd Ste 101",
        latitude: "35.85",
        longitude: "-78.89",
        phone: "8455679643"
    },
    {
        name: "Unknown",
        city: "Mammoth Lakes",
        // location: {
        //     "type" : "Point",
        //     "coordinates" : [
        //         -118.9,
        //         37.61
        //     ]
        // }
        street: "1234 Street Rd",
        latitude: "37.34",
        longitude: "-77.99",
        phone: "1234567890"
    }
];

// inserting the breweries into the database
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

// // creating an index of brewery locations for the centerSphere search
// db.Brewery
//     .createIndex( { location: "2dsphere" } )
//     .then(data => {
//         console.log(data.result + " index created");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.err(err);
//         process.exit(1);
//     });

// // searching for locations within 10 miles of given coordinates
// const radians = 10 / 3963.2;

// db.Brewery
//     .find( {
//         location: {
//             $geoWithin: {
//                 $centerSphere: [ [ -78.89, 35.85 ] , radians ]
//             }
//         }
//     } )
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
