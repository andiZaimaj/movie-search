import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const apiKey = "aad558c2";
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    );
    setMovies(response.data.Search.slice(0, 3));
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Movie Search</h1>
        <SearchBar onSearch={searchMovies} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
