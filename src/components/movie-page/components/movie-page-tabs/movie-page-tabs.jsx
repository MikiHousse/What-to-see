import React, { useState } from "react";
import MoviePageDesc from "./components/movie-page-desc/movie-page-desc";
import MoviePageDetails from "./components/movie-page-details/movie-page-details";
import MoviePageReviews from "./components/movie-page-reviews/movie-page-reviews";
import { useSelector } from "react-redux";
import { getReviewsFilm } from "../../../../redux/films-data/films-selectors";

const MoviePageTabs = ({ selectFilm, movieReviews, film }) => {
  const [select, setSelect] = useState("desk");
  const review = useSelector(getReviewsFilm);

  const getByType = (type) => {
    switch (type) {
      case "desk":
        return <MoviePageDesc film={selectFilm} />;
      case "details":
        return <MoviePageDetails film={selectFilm} />;
      case "reviews":
        return <MoviePageReviews movieReviews={movieReviews} review={review} />;
    }
    return <MoviePageDesc film={film} />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            className={`movie-nav__item ${
              select === "desk" && `movie-nav__item--active`
            }`}
          >
            <p className="movie-nav__link" onClick={() => setSelect("desk")}>
              Overview
            </p>
          </li>
          <li
            className={`movie-nav__item ${
              select === "details" && `movie-nav__item--active`
            }`}
          >
            <p className="movie-nav__link" onClick={() => setSelect("details")}>
              Details
            </p>
          </li>
          <li
            className={`movie-nav__item ${
              select === "reviews" && `movie-nav__item--active`
            }`}
          >
            <p className="movie-nav__link" onClick={() => setSelect("reviews")}>
              Reviews
            </p>
          </li>
        </ul>
      </nav>
      {getByType(select)}
    </div>
  );
};

export default MoviePageTabs;
