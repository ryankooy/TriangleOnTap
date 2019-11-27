const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  location: {
    coordinates: [
      {
        longitude: { type: Number },
        latitude: { type: Number }
      }
    ]
  }
});

const Coordinates = mongoose.model("Coordinates", coordinatesSchema);

module.exports = Coordinates;
