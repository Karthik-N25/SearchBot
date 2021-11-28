import React from "react";

const SearchBox = ({searchChange}) => {
return(
    <input 
    className="bg-lightest-blue pa2 ma2 br1 shadow-5"
    placeholder="Search"
    onChange={searchChange}
    />
);
}

export default SearchBox;