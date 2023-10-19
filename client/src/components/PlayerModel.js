import React from "react";

const PlayerModel = ({ videoUrl, movieData, onClose }) => {
  return (
    <div className='player-modal' style={{ display: "block" }}>
      <div className='player-content'>
        <iframe
          width='100%'
          height='475'
          src={videoUrl}
          allowFullScreen
          title='Video Player'
        ></iframe>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <div className='movie-details'>
          <h2>{movieData.title}</h2>
          <p>{movieData.overview}</p>
          <p>Original Language: {movieData.original_language}</p>
          <p style={{ color: "red", padding: 20 }}>
            Please change server from top corner if movie is not playing
          </p>
          <p style={{ color: "red", padding: 20 }}>
            DMCA: We don't store files, only provide links to media hosted
            elsewhere. Contact the file hosts directly for legal concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerModel;
