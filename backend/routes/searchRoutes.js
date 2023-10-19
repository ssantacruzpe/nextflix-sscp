const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController')

// Define a route for searching movies
router.get('/search', searchController.searchMovies, (req, res) => {
    // Route handling logic here
});

module.exports = router;
