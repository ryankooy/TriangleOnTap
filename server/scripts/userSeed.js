// DEPENDENCIES =====================
const mongoose = require("mongoose");
const db = require("../models");

// Empty the user DB and insert the information below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/triangleontap"
    // 'mongodb://user:admin1@ds037155.mlab.com:37155/heroku_trz1rz2v'    
);

const userSeed = [
    {
        firstName: "Miran",
        lastName: "Jang",
        username: "mjang",
        password: db.User.hashPassword("admin"),
        breweries: []
    },
    {
        firstName: "Ryan",
        lastName: "Kooy",
        username: "rkooy",
        password: db.User.hashPassword("admin"),
        breweries: []
    },
    {
        firstName: "Matthew",
        lastName: "Parks",
        username: "mparks",
        password: db.User.hashPassword("admin"),
        breweries: []
    },
    {
        firstName: "Jason",
        lastName: "Whited",
        username: "jwhited",
        password: db.User.hashPassword("admin"),
        breweries: []
    },
    {
        firstName: "Frank",
        lastName: "Zachary",
        username: "fzachary",
        password: db.User.hashPassword("admin"),
        breweries: []
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1);
    });