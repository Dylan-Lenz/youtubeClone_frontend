import React, { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from 'react-router-dom';



const SearchResultsPage = () => {

  

  return (
    <div className = "container">
      <div>
        <SearchBar/>
      </div>
      <div className="vids">
        <Link to="/related">
            <iframe>
                <div>
                    <button>Sample Video</button>
                    <button>Sample Video</button>
                    <button>Sample Video</button>
                </div>
                <div>
                    <button>Sample Video</button>
                    <button>Sample Video</button>
                    <button>Sample Video</button>
                </div>
            </iframe>
          </Link>
      </div>
    </div>
  );
};

export default SearchResultsPage;
