import React from 'react'

const MovieItem = ({movie}) => {
  return (
    <>
    <div className="movie-item">
        <img src={movie.picture} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Genre: {movie.genre}</p>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
    </div>
    </>
  )
}

export default MovieItem