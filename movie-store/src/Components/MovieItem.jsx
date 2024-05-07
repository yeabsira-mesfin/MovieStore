import React from 'react'

const MovieItem = ({movie}) => {
  return (
    <>
    <img src={movie.picture} alt="" />
    <h2>{movie.title}</h2>
    <p>Genre: {movie.genre}</p>
    <p>Year: {movie.year}</p>
    <p>Rating: {movie.rating}</p>
    </>
  )
}

export default MovieItem