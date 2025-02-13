import { useState } from "react";
import spiderman from "../assets/spiderman.jpg";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSetRating = (star) => {
    setRating(star);
  };

  return (
    <div className="card">
      <div className="container">
        <img src={spiderman} alt="" width={250} height={300} />
        <h1 className="heading">Rate Movie</h1>
        <div className="star-container">
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                onClick={() => handleSetRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                style={{
                  fontSize: "50px",
                  cursor: "pointer",
                  color: hover >= star || rating >= star ? "gold" : "grey",
                  transform:
                    hover >= star || rating >= star ? "scale(1.5)" : "scale(1)",
                }}
              >
                ★
              </span>
            ))}
            <p className="rating-text">{rating}/5 Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
