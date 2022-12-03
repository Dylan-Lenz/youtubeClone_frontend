// import React, { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from 'react-router-dom';



const SearchResultsPage = (props) => {

  

  return (
    <div className = "container">
      <div>
        <SearchBar/>
      </div>
      <div className="vids">
        <Link to="/related">
        <iframe title="player" type="text/html" width="690" height="360"
            src= ''
            frameborder="0">
          </iframe>
          </Link>
      </div>
    </div>
  );
};

export default SearchResultsPage;
