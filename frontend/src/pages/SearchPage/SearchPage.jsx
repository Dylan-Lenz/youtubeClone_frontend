import React from "react";
import VideoList from "../../components/VideoList/VideoList";
import "./SearchPage.css";

const SearchPage = ({ results }) => {
  return (
    <div>
      <div className="searchGrid">
        <VideoList videos={results} />
      </div>
    </div>
  );
};

export default SearchPage;