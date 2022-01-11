import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 

import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("s");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=23038236&s=star war`

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();

  }, [])
  return ( 
    <div className='container-fluid movie-app'>
    <div className=' d-flex align-items-center mt-4 mb-4'>
      <MovieHeading heading="MOVIES"/>
      <SearchBox search={searchValue} setSearch={setSearchValue} />
    </div>
      <div className='row'>
          <MovieList  movies={movies}/>
      </div>
    </div>
   );
}
 
export default App;