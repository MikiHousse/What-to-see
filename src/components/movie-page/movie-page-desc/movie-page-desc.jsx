import React from "react";

const ratingLevel = (item) => {
  if (item >= 0 && item < 3) {
    return "Bad";
  } else if (item >= 3 && item < 5) {
    return "Normal";
  } else if (item >= 5 && item < 8) {
    return "Good";
  } else if (item >= 8 && item < 10) {
    return "Very good";
  } else if (item === 10) {
    return "Awesome";
  }
};

const MoviePageDesc = ({ film }) => {
  const { rating, scoresCount, description, director, starring } = film;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director">
          <strong>
            Director:{` `}
            {director}
          </strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring:{` `}
            {starring.join(", ")}
          </strong>
        </p>
      </div>
    </>
  );
};

export default MoviePageDesc;
