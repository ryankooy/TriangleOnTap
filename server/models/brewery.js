const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
