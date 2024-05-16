const express = require("express");
const route = express.Router();
const {
  getMovieList, 
  getSingleMovie,
  createMovie, 
  deleteMovie,
  deleteMovieList,
  updateMovie,
} = require("../logic/logic");  

route.post("/createMovie", createMovie);
route.get("/getAllMovie", getMovieList);
route.get("/getSingleMovie/:id", getSingleMovie);
route.delete("/deleteMovieList", deleteMovieList);
route.delete("/deleteMovie/:id", deleteMovie); 
route.put("updateMovie/:id", updateMovie);

module.exports = route