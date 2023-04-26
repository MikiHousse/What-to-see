import React from "react";

const MoviePageReviews = ({ review }) => {
  const dateConvector = (data) => {
    const date = new Date(data);
    return date.toLocaleString("en-US");
  };

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {review.map((item) => {
            return (
              <div key={item.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{item.comment}</p>

                  <footer className="review__details">
                    <cite key={item.user.id} className="review__author">
                      {item.user.name}
                    </cite>
                    <time
                      className="review__date"
                      dateTime={dateConvector(item.date)}
                    >
                      {dateConvector(item.date)}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{item.rating}</div>
              </div>
            );
          })}
        </div>
        {/* <div className="movie-card__reviews-col">
          {col2.map((item) => {
            return (
              <div key={item.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{item.text}</p>

                  <footer className="review__details">
                    <cite key={item.user.id} className="review__author">
                      {item.user.name}
                    </cite>
                    <time
                      className="review__date"
                      dateTime={dateConvector(item.date)}
                    >
                      {dateConvector(item.date)}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{item.rating}</div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default MoviePageReviews;
