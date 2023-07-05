import React, { useState } from "react";

import FilmPageDesc from "./components/film-page-desc/film-page-desc";
import FilmPageDetails from "./components/film-page-details/film-page-details";
import FilmPageReviews from "./components/film-page-reviews/film-page-reviews";

import { useSelector } from "react-redux";
import { getReviewsFilm } from "../../../../redux/films-data/films-selectors";

const FilmPageTabs = ({ selectFilm, movieReviews, film }) => {
  const [select, setSelect] = useState("desk");
  const review = useSelector(getReviewsFilm);

  const getByType = (select) => {
    switch (select) {
      case "desk":
        return <FilmPageDesc film={selectFilm} />;
      case "details":
        return <FilmPageDetails film={selectFilm} />;
      case "reviews":
        return <FilmPageReviews movieReviews={movieReviews} review={review} />;
      default:
        return <FilmPageDesc film={film} />;
    }
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

export default FilmPageTabs;
