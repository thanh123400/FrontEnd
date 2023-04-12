import React, { useState } from 'react';

const Rating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = rating => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = rating => {
    onRatingChange(rating);
  };

  return (
    <div style={{
        margin:'0 40px 0 40px',    
        borderBottom: '1px solid black',
      }}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className="star"
            style={{
                margin:'0 20px 0px 0',
              color: ratingValue <= (hoverRating || rating) ? '#ffc107' : '#e4e5e9',
              fontSize:"25px",
            }}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick(ratingValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;