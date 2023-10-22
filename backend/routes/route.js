const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });


const {
getTrendingMovies,
getImages,
getExternalID,
} = require("../controllers/fetchData");


const {
markFav,
getAllFav,
removeFav,
} = require("../controllers/favController");


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
} catch (error) {
console.log(error);
}


//Fetch external id


try {
router.get("/external/:id", (req, res) => {
const tmdbID = req.params.id;
getExternalID(req, res, tmdbID);
});
} catch (error) {
console.log(error);
}
try {
router.post("/favorites/create", markFav);
} catch (error) {
console.log(error);
}


try {
router.get("/favorites", getAllFav);
} catch (error) {
console.log(error);
}


try {
router.delete("/favorites/delete/:id", removeFav);
} catch (error) {
console.log(error);
}


module.exports = router;