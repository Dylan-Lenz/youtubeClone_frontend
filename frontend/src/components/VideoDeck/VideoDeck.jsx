import React from 'react';
import './VideoDeck.css'
import VideoCard from '../VideoCard/VideoCard';

const VideoDeck = (props) => {
    
    return ( 
        <div className='videoDeck'>
                <div className='videoDeck__SetA'>
                    <ul>
                        <li><VideoCard/></li>
                        <li><VideoCard/></li>
                        <li><VideoCard/></li>
                    </ul>
                </div>
                <div className='videoDeck__SetB'>
                    <ul>
                        <li><VideoCard/></li>
                        <li><VideoCard/></li>
                        <li><VideoCard/></li>
                    </ul>
                </div>
            {props.mapVideos()}
        </div>
     );
}

export default VideoDeck;