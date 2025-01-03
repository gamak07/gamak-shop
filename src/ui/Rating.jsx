import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalStars }, (_, index) => (
        <FaStar
          key={index}
          color={index < rating ? "#facc15" : "#d1d5db"}
          onClick={(e) => {
            e.stopPropagation();
            setRating(index + 1);
          }}
          style={{ cursor: "pointer" }}
        />
      ))}
      <span>(21)</span>
    </div>
  );
};

export default Rating;
