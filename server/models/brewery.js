const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: { type: String, required: true },
  brewery_type: { type: String },
  street: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postal_code: { type: String },
  country: { type: String },
  longitude: { type: String },
  latitude: { type: String },
  phone: { type: String },
  website_url: { type: String },
  // location: { any: { type: String, coordinates: [Number] } },
  // date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
