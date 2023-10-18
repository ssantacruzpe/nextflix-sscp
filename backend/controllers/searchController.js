const Movie = require("../models/models.js") 

const searchMovies = async (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.status(400).json({ error: "Query parameter 'q' is required." });
    }

    try {
        const results = await Movie.find({ title: { $regex: new RegExp(query, "i") } });
        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while searching for movies." });
    }
};

module.exports = {
    searchMovies
};

