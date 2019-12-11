// Defining our brewery data model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: { type: String, required: true },
  street: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  longitude: { type: String },
  latitude: { type: String },
  phone: { type: String },
  website_url: { type: String },
  date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
