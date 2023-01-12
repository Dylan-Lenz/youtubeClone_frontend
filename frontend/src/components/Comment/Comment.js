import React, { useState} from 'react';



const Comment = ({ text, userName}) => {

  const [commentLikes, setCommentLikes] = useState (0);

  let addLike = () => setCommentLikes(commentLikes + 1);
    
  const handleOnClick = (e) => {
    e.preventDefault();
    addLike(commentLikes);
  }
  
  
  return (
      <div>
        <h2>
          {userName}: {text}
        </h2>
        <p>
          Likes: {commentLikes}
        </p>
          <button value={commentLikes} onClick={handleOnClick}>Like</button>
      </div>
    );
  };
  
  export default Comment;
  