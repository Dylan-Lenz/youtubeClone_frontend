import React, { useState } from "react";

const CommentForm = ({ submitComment }) => {
  const [commentText, setCommentText] = useState("");

  return (
   <div>
     <form
      className="commentForm"
      onSubmit={(e) => {
        e.preventDefault();
        submitComment(commentText);
        setCommentText("");
      }}
    >
      <label>
        Enter Comment: {""}{" "}
        <input
          type="text"
          name="commentText"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
    </form>
   </div>
  );
};

export default CommentForm;
