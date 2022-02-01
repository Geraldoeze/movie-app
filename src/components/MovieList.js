import React from "react";
import '../App.css'

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    console.log(props.movies)
    return ( 
        <>
            {props.movies.map((movie, index) => {
                return(
                <div key={movie.imdbID} className=" image-container d-flex justify-content-start mvlist">
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)} 
                        className="overlay d-flex align-items-center justify-contents">
                        <FavouriteComponent />
                    </div>
                </div>)
            }) 
            }
            {console.log(props.movies)}
        </>
     );
}
 
export default MovieList;
