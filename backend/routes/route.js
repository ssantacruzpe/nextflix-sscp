const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });

const { getTrendingMovies, getImages } = require("../controllers/fetchData");

//Fetch trending movies

try {
  router.get("/trending", getTrendingMovies);
} catch (error) {
  console.log(error);
}

//Fetch images

try {
  router.get("/images/:path", (req, res) => {
    const imagePath = req.params.path;
    getImages(req, res, imagePath);
  });
} catch (error) {}

module.exports = router;
