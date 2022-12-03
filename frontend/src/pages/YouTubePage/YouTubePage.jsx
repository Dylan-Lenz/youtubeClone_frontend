import React, { useState, useEffect } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from 'react-router-dom';
import {KEY} from "../../localKeySecure";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';



const YouTubePage = () => {

  
  const {Key} = useParams({KEY});
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

 
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q={SEARCH}&key=${Key}=snippet&type=video&maxResults=5`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, [token]);
  

  return (
  <div>
    <div>
      <SearchBar parentSearch={videos}/>
    </div>
    <div>
      {videos &&
          videos.map((video) => (
            <p key={video.id}>
              {video.title}
            </p>
          ))}
    </div>
  </div>
  );
};

export default YouTubePage;

