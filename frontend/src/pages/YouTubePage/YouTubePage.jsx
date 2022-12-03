import React, { useState, useEffect } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams, Link } from 'react-router-dom';
import {KEY} from "../../localKeySecure";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import  "./YouTubePage.css";



const YouTubePage = () => {

  
  const {Key} = useParams({KEY});
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [searches, setSearches] = useState('ships');
  const [related, setRelated] = useState('LnzuMJLZRdU');

  const updateSearches = () => {
    let updatedSearches = [...searches];
    setSearches(updatedSearches);
}

 
  useEffect(() => {
    const fetchSearchedVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searches}1&key=${Key}=snippet&type=video&maxResults=5`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchSearchedVideos();
    
    const fetchRelatedVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${related}=${Key}&part=snippet`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setRelated(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchRelatedVideos();
  }, [token]);
  

  return (
    <div className = "container">
      <div>
        <SearchBar updateSeearches={updateSearches}/>
      </div>
      <div className="vids">
        <Link to="/related" onClick={(e) => setRelated(e.target.v)}>
          {videos &&
            videos.map(
              (video) => (
                <ul key={video.id}>
                  <li>
                  {videos}
                  </li>
                </ul>
              )  
            )
          }
          </Link>
      </div>
    </div>
  );
};

export default YouTubePage;

