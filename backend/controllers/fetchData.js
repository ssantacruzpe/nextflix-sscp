const axios = require("axios");

const options = {
  headers: { accept: "application/json" },
};

// this is for homepage when  user loads home page by default it will fetch data from here and display it

const getTrendingMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?include_adult=false&api_key=7d07a9d7edc5645b1c40adf7c00a4100&language=en-US&page=1`,
      options,
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

//this is middleware to fetch images from the api
const getImages = async (req, res, imagePath) => {
  try {
    const response = await axios.get(
      `https://image.tmdb.org/t/p/w342/${imagePath}`,
      { responseType: "stream" },

      options,
    );

    res.setHeader("Content-Type", "image/jpeg");

    response.data.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getTrendingMovies, getImages };
