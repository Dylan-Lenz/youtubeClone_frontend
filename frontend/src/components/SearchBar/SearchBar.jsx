import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SearchBar({updateSearches}) {

    const [search, setSearch] = useState('');
    
    const handSub = (e) => {
        e.preventDefault();
        updateSearches(search);
    };
            
    return (
        <div>
            <p>Search For Videos</p>
            <form onSubmit={handSub}>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.v)
                }/>
                <Link to="/result">
                <button type="submit" >Enter</button>
                </Link>
            </form>
        </div>
    )
}