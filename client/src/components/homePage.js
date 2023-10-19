import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageComponent from "./fetchImages";

import "./homePage.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/trending")
      .then((response) => {
        setTrendingMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='movie-grid'>
      {trendingMovies.map((movie) => (
        <div key={movie.id} className='movie-item'>
          <ImageComponent imagePath={movie.poster_path} />
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average * 10}%</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
