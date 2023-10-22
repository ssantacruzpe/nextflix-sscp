import React, { useState, useEffect } from "react";
import "./FavButton.css";


const FavoriteButton = ({ movieID }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFav = async (movieId) => {
    try {
    console.log(movieId);
    if (isFavorite) {
      await fetch(`http://localhost:3000/favorites/delete/${movieId}`, {
      method: "DELETE",
      });
        } else {
          console.log(movieId);
          await fetch(`http://localhost:3000/favorites/create`, {
            method: "POST",
            body: JSON.parse({ movieID: movieId }),
            headers: {
            "Content-Type": "application/json",
          },
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
<span role='img' aria-label='Favorite'>
★
</span>
</button>
);
};


export default FavoriteButton;