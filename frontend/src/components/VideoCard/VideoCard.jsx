import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';

const VideoCard = (props) => {
    
    let video = props.video;
    
    return ( 
        <div className='videoCard'>
            <Link to="/related" >
                <img className='videoCard__img' src='https://www.comstocksmag.com/sites/main/files/imagecache/lightbox/main-images/0417_blog_lead_ss.jpg' alt='video' />
            </Link>
            <div className='videoCard__text'>
                <h1 className='videoCard__title'>TEST TITLE</h1>
                <p className='videoCard__desc'>TEST DESC</p>
            </div>
        </div>
     );
}

export default VideoCard;

// return ( 
//     <div className='videoCard'>
//         <img className='videoCard__img' src={video.snippet.thumbnails} alt='video' />
//         <div className='videoCard__text'>
//             <h1>{video.snippet.title}</h1>
//             <p>{video.snippet.description}</p>
//         </div>
//     </div>
//  );