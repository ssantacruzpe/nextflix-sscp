const Router = require("express").Router();
const {searchMovies} = require('../controllers/searchController')

// Define a route for searching movies
Router.get('/search', searchMovies)

module.exports =  Router;
