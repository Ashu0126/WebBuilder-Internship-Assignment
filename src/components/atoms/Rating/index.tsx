import React from "react";

const Rating = ({ rating }: any) => {
  const maxRating = 10;
  const numberOfStars = 5;
  const filledStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= numberOfStars; i++) {
      if (i <= filledStars) {
        stars.push(
          <span key={i} style={{ color: "gold" }}>
            ★
          </span>
        );
      } else if (i === filledStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} style={{ color: "gold" }}>
            ☆
          </span>
        );
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
