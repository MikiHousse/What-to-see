import React from "react";

const MoviePageDesc = ({ film }) => {
  const { rating, scores_count, description, director, starring } = film;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scores_count} ratings</span>
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
