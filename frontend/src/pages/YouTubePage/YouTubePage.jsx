// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchPage from "../SearchPage/SearchPage";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPage from "../VideoPage/VideoPage";

import {KEY} from "../../localKeySecure";

function YouTubePage() {
  const [videoResults, setVideoResults] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchResults("ships");
  }, []);

  const fetchResults = async (searchTerm) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            q: searchTerm,
            key: KEY,
            part: "snippet",
            type: "video",
            maxResults: 6,
          },
        }
      );
      setVideoResults(response.data.items);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <SearchBar handleSearch={fetchResults} />
      <Routes>
        <Route
          path="/"
          element={<SearchPage results={videoResults} />}
        />
        <Route path="/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default YouTubePage;
