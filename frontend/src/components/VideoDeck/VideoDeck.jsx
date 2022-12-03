import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';

const VideoDeck = (props) => {
    
    return ( 
        <div className='videoDeck'>
            <Link to="/related" >
            <div className='videoDeck__SetA'>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
            <div className='videoDeck__SetB'>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
            </Link>
            {props.mapVideos()}
        </div>
     );
}

export default VideoDeck;