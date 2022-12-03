import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const YouTubePage = () => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users", {
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
    <div className="container">
      <h1>YouTube Home Page For {user.username}!</h1>
    </div>
  );
};

export default YouTubePage;