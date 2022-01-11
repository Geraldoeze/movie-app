import React from "react";
import '../App.css'

const MovieList = (props) => {
    return ( 
        <>
            {props.movies.map((movie, index) => {
                return(
                <div className="d-flex justify-content-start mvlist">
                    <img src={movie.Poster} alt='movie'></img>
                </div>)
            })}
        </>
     );
}
 
export default MovieList;
