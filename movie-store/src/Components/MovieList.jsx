import React from 'react'
import MovieItem from './MovieItem';
const MovieList = () => {

    const movies = [
        {id:1, title: 'Titanic', genre: 'Romance', year: 1997, rating:7.9, picture:'https://images.app.goo.gl/fjKbeVWJfbwGSXfm7'},
        {id:2, title: 'Fired Up', genre: 'Comedy', year: 2009, rating:6.1, picture: 'https://images.app.goo.gl/YT18B8gnG6noRhEC7'},
        {id:2, title: 'Django Unchained', genre: 'Action', year: 2012, rating:8.5, picture: 'https://images.app.goo.gl/xNXcibYfqAfENk7T8'},
        {id:2, title: 'Grey Man', genre: 'Action', year: 2022, rating:6.5, picture: 'https://images.app.goo.gl/Aj8chJtCUf7uXHhV7'},
        {id:2, title: 'Wedding Crashers', genre: 'Romantic Comedy', year: 2005, rating:7, picture: 'https://images.app.goo.gl/PoHsVWqmhACBuDjQ9'},
        {id:2, title: 'The Notebook', genre: 'Romantic Comedy', year: 2004, rating:7.8, picture: 'https://images.app.goo.gl/pSme8n2zv5jrxMA1A'},
    ];
  return (
    <>
    {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie}/>
    ))}
    </>
  )
}

export default MovieList