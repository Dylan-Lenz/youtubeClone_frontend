import React, { useState } from 'react';


export default function SearchBar({updateSearches}) {

    const [search, setSearch] = useState('');
    
    const handSub = (e) => {
        e.preventDefault();
        updateSearches(search);
    };
            
    return (
        <form onSubmit={handSub}>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.v)
            }/>
        </form>
    )
}