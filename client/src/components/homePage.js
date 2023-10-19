import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageComponent from "./GetImages";
import PlayerModel from "./PlayerModel";

import "./homePage.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  const openVideoModal = (movie) => {
    const videoUrl = `https://embed.smashystream.com/playere.php?tmdb=${movie.id}`;
    setSelectedMovie(movie);
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setSelectedVideo(null);
  };

  return (
    <div className='movie-grid'>
      {trendingMovies.map((movie) => (
        <div
          key={movie.id}
          className='movie-item'
          onClick={() => openVideoModal(movie)}
        >
          <ImageComponent imagePath={movie.poster_path} />
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average * 10}%</p>
        </div>
      ))}

      {selectedMovie && selectedVideo && (
        <PlayerModel
          videoUrl={selectedVideo}
          movieData={selectedMovie}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default HomePage;
