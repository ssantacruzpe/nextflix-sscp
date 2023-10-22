import React, { useState, useEffect } from "react";
import "./FavList.css";
import FavoriteButton from "./favButton";

const FavoriteList = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);
  useEffect(() => {
    const fetchFavoriteImage = async () => {
      try {
        const response = await fetch("/api/favorites");
        const data = await response.json();
        setFavoriteImages(data);
      } catch (error) {
        console.error("Error fetching favorites movies", error);
      }
    };
    fetchFavoriteImage();
  }, []);
 
  return (
    <div className='container'>
      <div className='favorite-list'>
        <div className='movie-list'>
          {favoriteImages.length > 0 ? (
            favoriteImages.map((image) => (
              <div key={image._id} className='movie-item'>
                <div className='movie'>
                  <div className='movie-square'></div>
                </div>
                <div className='details'>
                  <h3>{image.name}</h3>
                  <FavoriteButton imageID={image._id} />
                  <p>{image.description}</p>
                </div>
              </div>
            ))
          ) : (
            <img
              src='https://img.freepik.com/premium-vector/modern-flat-design-concept-no-favorites-empty-favorites-popup-design_637684-90.jpg?w=2000'
              alt='No favorites'
              className='no-fav-image'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;