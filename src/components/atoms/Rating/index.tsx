import React from "react";

const Rating = ({ rating }: any) => {
  const renderStars = () => {
    const integerPart = Math.floor(rating); // Extract integer part
    const decimalPart = rating - integerPart; // Extract decimal part
    const stars = [];

    // Render integer part stars
    for (let i = 1; i <= integerPart; i++) {
      stars.push(
        <span key={i} style={{ color: "gold" }}>
          ★
        </span>
      );
    }

    // Render partially filled star for the decimal part
    if (decimalPart > 0) {
      stars.push(
        <span
          key="decimal"
          style={{
            color: "gold",
            width: `${decimalPart * 100}%`,
            overflow: "hidden",
          }}
        >
          ★
        </span>
      );
    }

    // Render empty stars for remaining slots
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`}>★</span>);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
