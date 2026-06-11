const mongoose = require("mongoose");

const DaySchema = new mongoose.Schema({
  day: Number,
  title: String,
  description: String,
  hotel: String,
  startPlace: String,
  endPlace: String,
  activities: [String],
}, { _id: false });

const PackageSchema = new mongoose.Schema({
  id: Number,
  id_val: Number,
  title: String,
  destination: String,
  region: String,
  country: String,
  price: Number,
  days: Number,
  rating: Number,
  reviews: String,
  badge: String,
  description: String,
  image: String,
  itinerary: [DaySchema],
});

module.exports = mongoose.model("Packages", PackageSchema);