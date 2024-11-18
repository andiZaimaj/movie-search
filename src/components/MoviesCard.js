import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white movie-card">
      <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          alt={movie.Title}
          className="w-full h-90 object-cover"
        />
        <h3 className="text-lg font-bold">{movie.Title}</h3>
      </a>
    </div>
  );
};

export default MovieCard;
