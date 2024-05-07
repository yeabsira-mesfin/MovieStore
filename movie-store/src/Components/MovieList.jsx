import React from 'react';
import moviesData from './moviesData';

const movies = moviesData(); // Call the moviesData function to get the array of movie objects

function MovieList({searchQuery}) {
  // Ensure that movies is an array
  console.log(Array.isArray(movies)); // Check if movies is an array

  // Use the filter method on movies
  const filteredMovies = movies.filter(movie =>
    movie.title.includes(searchQuery)
  );

  return (
    <div>
      {filteredMovies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Genre: {movie.genre}</p>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
