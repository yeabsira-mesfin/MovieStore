import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import Filters from './Components/Fliters'
function App() {
  return (
    <>
    <Header/>
    <Filters/>
    <MovieList/>
    </>
  );
}

export default App;
