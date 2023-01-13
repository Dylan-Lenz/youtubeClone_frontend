import React, { useState } from "react";
import "../SearchBar/SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch("");
  };

  return (
   <div>
     <form className="searchBar" onSubmit={handleSubmit}>
      <label> Search For Videos{""}</label>
      <br />
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br></br>
      <br></br>
      <button type="submit">Search!</button>
    </form>
   </div>
  );
};

export default SearchBar;