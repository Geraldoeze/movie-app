import React from "react";
import '../App.css'

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    return ( 
        <>
            {props.movies.map((movie, index) => {
                return(
                <div key={movie.imdbID} className=" image-container d-flex justify-content-start mvlist">
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => props.handleFavouriteClick(movie)} 
                        className="overlay d-flex align-items-center justify-contents">
                        <FavouriteComponent />
                    </div>
                </div>)
            }) 
            }
        </>
     );
}
 
export default MovieList;
