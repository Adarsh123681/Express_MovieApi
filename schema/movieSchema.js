const mongoose = require("mongoose");

// creating Schema
const movieSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  img_url: {
    require: true,
    type: String,
  },
  summary: {
    require: true,
    type: String,
  },
});

// creating model for the schema 
const movies = mongoose.model("movie" , movieSchema);
module.exports = movies