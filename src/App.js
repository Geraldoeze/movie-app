import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 

import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([ ])
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?apikey=23038236&type=${searchValue}`

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson)
    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
    
  };

  useEffect(() => {
    getMovieRequest();

  }, [searchValue]);

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourite, movie];
    setFavourite(newFavouriteList);
  }
  return ( 
    <div className='container-fluid movie-app'>
    <div className=' d-flex align-items-center mt-4 mb-4'>
      <MovieHeading heading="MOVIES"/>
      <SearchBox search={searchValue} setSearch={setSearchValue} />
    </div>
      <div className='row'>
          <MovieList  
            movies={movies} 
            handleFavouritesClick={AddFavouriteMovie}
            favouriteComponent={AddFavourite}/>
      </div>
    </div>
   );
}
 
export default App; 