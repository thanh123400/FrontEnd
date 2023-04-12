import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentInput = e.target.elements.commentInput;
    const newComment = commentInput.value;
    const NameUser = e.target.elements.NameUser;
    const nameUsercomment = NameUser.value;
    if (newComment && nameUsercomment) {
      commentInput.value = "";
      NameUser.value = "";
      setComments([
        ...comments,
        { name: nameUsercomment, comment: newComment },
      ]);
    }
  };

  return (
    <div style={{ height: "200px" }}>
      <h3
        style={{
          fontFamily: '"Arial", sans-serif',
          fontWeight: "495px",
          fontSize: "25px",
          margin: "10px 0 10px 20px",
        }}
      >
        Comments:
      </h3>
      <form style={{ margin: "10px 0px 20px 30px" }} onSubmit={handleSubmit}>
        <input
          style={{ width: "115px" }}
          type="text"
          name="NameUser"
          placeholder="Email or Username"
        />
        <input
          style={{ width: "200px" }}
          type="text"
          name="commentInput"
          placeholder="Add a comment"
        />
        <button style={{ width: "80px" }} type="submit">
          Comment
        </button>
      </form>
      <div style={{ overflow: "auto", height: "175px" }}>
        {/* Đã comment ... */}
        {/* Đang comment */}
        {comments.length === 0 ? (
          <p
            style={{
              fontFamily: '"Arial", sans-serif',
              fontSize: "15px",
              margin: "0 0 0   20px",
            }}
          >
            No comments yet.
          </p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "30px",
                  alignItems: "center",
                  borderBottom: '1px solid grey',
                  width: '300px'
                }}
                key={index}
              >
                <p style={{fontSize:'15px', paddingRight:'15px'}}>{comment.name}</p>
                <p style={{fontSize:'15px'}}>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comment;
