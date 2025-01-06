import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ average_rating, total_ratings }) => {
  const roundedRating = Math.round(average_rating * 2) / 2; // Round to nearest half
  const [rating, setRating] = useState(roundedRating);
  

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(rating)) {
          return (
            <FaStar
              key={index}
              color="#facc15"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setRating(index + 1);
              }}
            />
          );
        } else if (index < rating) {
          return (
            <FaStarHalfAlt
              key={index}
              color="#facc15"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setRating(index + 0.5);
              }}
            />
          );
        } else {
          return (
            <FaStar
              key={index}
              color="#d1d5db"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setRating(index + 1);
              }}
            />
          );
        }
      })}
      <span>({total_ratings})</span>
    </div>
  );
};

export default Rating;
