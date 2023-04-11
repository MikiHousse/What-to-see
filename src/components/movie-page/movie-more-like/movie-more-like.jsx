import React from "react";

const MovieMoreLike = ({ movieMoreLike }) => {
  return (
    <div className="catalog__movies-list">
      {movieMoreLike.map((item) => {
        return (
          <article
            key={item.id}
            className="small-movie-card catalog__movies-card"
          >
            <div className="small-movie-card__image">
              <img src={item.img} alt={item.name} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">
                {item.name}
              </a>
            </h3>
          </article>
        );
      })}
    </div>
  );
};

export default MovieMoreLike;
