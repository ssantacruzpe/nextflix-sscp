import React, { useState, useEffect } from "react";
import "./FavButton.css";

const FavoriteButton = ({ imageID }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavStatus = async () => {
      try {
        const response = await fetch(`/api/images/${imageID}/favorite`);
        const data = await response.json();
        setIsFavorite(data.isFavorite);
      } catch (error) {
        console.error("Error fetching fav status:", error);
      }
    };

    fetchFavStatus();
  }, [imageID]);

  const toggleFav = async () => {
    try {
      if (isFavorite) {
        await fetch(`/api/images/${imageID}/favorite`, {
          method: "DELETE",
        });
      } else {
        await fetch(`/api/images/${imageID}/favorite`, {
          method: "PUT",
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling fav status:", error);
    }
  };

  return (
    <button
      className={`favorite-button ${isFavorite ? "favorite" : ""}`}
      onClick={toggleFav}
    >
      <span role="img" aria-label="Favorite">★</span>
    </button>
  );
};

export default FavoriteButton;
