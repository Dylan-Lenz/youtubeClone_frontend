import React, { useState } from 'react';
import "./SearchBar.css";
import { Link } from 'react-router-dom';


export default function SearchBar({updateSearches}) {

    const [search, setSearch] = useState('');
    
    const handSub = (e) => {
        e.preventDefault();
        updateSearches(search);
    };
            
    return (
        <div className='searchBar'>
            <h1 className='searchBar__title'>Search For Videos</h1>
            <form onSubmit={handSub}>
                <input
                    className='searchBar__input'
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.v)
                }/>
                <Link to="/result">
                <button className='searchBar__button' type="submit" >Enter</button>
                </Link>
            </form>
        </div>
    )
}