import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageComponent = ({ imagePath }) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Construct the full image URL based on your server URL and the image path
    const fullImagePath = `http://localhost:3000/images${imagePath}`;

    axios
      .get(fullImagePath, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const imageBlob = new Blob([response.data]);
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageURL(imageUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [imagePath]);

  return (
    <div>
      {imageURL ? (
        <img src={imageURL} alt='Fetched Image' />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;
