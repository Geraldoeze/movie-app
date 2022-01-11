import React from "react";

const MovieHeading = (props) => {
    return (  
        <div style={{marginRight:'auto', fontFamily:'cursive'}}>
            <h1 style={{color:'red'}}>{props.heading}</h1>
        </div>
    );
}
 
export default MovieHeading;

