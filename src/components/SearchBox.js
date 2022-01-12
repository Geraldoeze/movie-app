import React from "react";

const SearchBox = (props) => {
    return ( 
        <div className="col col-sm-4">
            <input 
                className="form-control" 
                placeholder="Type to Search..."
                value={props.search}
                onChange= {(event) => props.setSearch(event.target.value)}></input>
            { console.log( props.search)}        
        </div>

     );
}
 
export default SearchBox;
