import React from 'react';

const VideoCard = (props) => {
    let video = props.video;
    
    return ( 
        <div className='videoCard'>
            <img className='videoCard__img' src={video} alt='video' />
            <div className='videoCard__text'>
                <h1>TEST TITLE</h1>
                <p>TEST DESC</p>
            </div>
        </div>
     );
}

export default VideoCard;


// return ( 
//     <div className='videoCard'>
//         <img className='videoCard__img' src={props.video.snippet.thumbnails} alt='video' />
//         <div className='videoCard__text'>
//             <h1>{props.video.snippet.localized.title}</h1>
//             <p>{props.video.snippet.localized.description}</p>
//         </div>
//     </div>
//  );