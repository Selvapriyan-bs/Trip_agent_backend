const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  category: String,
  readTime: String,
  date: String,
  summary: String,
  image: String,
  featured: Boolean,
  content: String,
});

module.exports = mongoose.model("Blog", BlogSchema);
