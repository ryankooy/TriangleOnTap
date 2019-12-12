const mongoose = require("mongoose");
const db = require("../models");

// Empty the user DB and insert the information below
mongoose.connect(
process.env.MONGODB_URI || 
"mongodb://localhost/triangleontap"
// "mongodb://user:admin1@ds037155.mlab.com:37155/heroku_trz1rz2v"
);

// Seed data
const brewerySeed = [
    {
        name: "Marriott Bar",
        city: "Cary",
        state: "North Carolina",
        street: "1229 Perry Rd Ste 101",
        latitude: "35.85",
        longitude: "-78.89",
        phone: "8455679643",
        website_url: "www.google.com",
    },
    {
        name: "Unknown",
        city: "Mammoth Lakes",
        state: "North Carolina",
        street: "1234 Street Rd",
        latitude: "37.34",
        longitude: "-77.99",
        phone: "1234567890",
        website_url: "www.yahoo.com"
    }
];

// Inserting the breweries into the database
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
