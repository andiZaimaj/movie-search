import React from "react";
import MovieCard from "./MoviesCard";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-600 text-xl">No movies found. Try searching!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
