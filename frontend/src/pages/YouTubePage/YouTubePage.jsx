import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import  "./YouTubePage.css";
import {KEY} from "../../localKeySecure";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoCard from '../../components/VideoCard/VideoCard';
import VideoDeck from '../../components/VideoDeck/VideoDeck';




const YouTubePage = (props) => {

  
  
  const [videos, setVideos] = useState([]);
  const {Key} = useParams({KEY});


  async function fetchSearchVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=ships&key=${Key}&part=snippet&type=video&maxResults=6`,
    setVideos(response.data.results));
  }

  function mapVideos(){
    return videos.map(video =>
      <VideoCard 
        key={video.id}
        video={video}
      />
    )
  }
  
  useEffect(() => {
    let mounted = true;
    if(mounted){
      fetchSearchVideos();
    }
    return () => mounted = false;
  }, []);
  
  return (
    <div className = "container__main">
        <SearchBar />
        <VideoDeck mapVideos={() => mapVideos()} />
    </div>
  );
};

export default YouTubePage;