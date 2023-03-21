import React, { useState } from "react";


const Comment = ({ text, userName }) => {

  const [commentLikes, setCommentLikes] = useState (0);
  const [commentDislikes, setCommentDislikes] = useState (0);
    
  const handleLikes = (e) => {
    e.preventDefault();
    setCommentLikes(commentLikes + 1);
  }

  const handleDislikes = (e) => {
    e.preventDefault();
    setCommentDislikes(commentDislikes + 1);
  }

  return (
      <div>
        <h2>
          {userName}: {text}
        </h2>
        <p>
          Likes: {commentLikes}
          Dislikes: {commentDislikes}
        </p>
          <button value={commentLikes} onClick={handleLikes}>Like</button>
          <button value={commentDislikes} onClick={handleDislikes}>DisLike</button>
      </div>
    );
  };
  
  export default Comment;
  