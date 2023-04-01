import React from "react";

const MoviePageReviews = () => {
  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">
                Overview
              </a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">
                Details
              </a>
            </li>
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">
                Reviews
              </a>
            </li>
          </ul>
        </nav>

        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  Discerning travellers and Wes Anderson fans will luxuriate in
                  the glorious Mittel-European kitsch of one of the director's
                  funniest and most exquisitely designed movies in years.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" datetime="2016-12-24">
                    December 24, 2016
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePageReviews;
