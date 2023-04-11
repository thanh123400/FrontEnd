import React, { useState } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentInput = e.target.elements.commentInput;
    const newComment = commentInput.value;
    commentInput.value = '';
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h3>Comments:</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" name="commentInput" placeholder="Add a comment" />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default Comment; 