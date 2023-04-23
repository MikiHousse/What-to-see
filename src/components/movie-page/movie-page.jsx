import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MoviePageDesc from "./movie-page-desc/movie-page-desc";
import MoviePageDetails from "./movie-page-details/movie-page-details";
import MoviePageReviews from "./movie-page-reviews/movie-page-reviews";
import MovieMoreLike from "./movie-more-like/movie-more-like";
import {
  FilmTypes,
  MovieMoreLikeTypes,
  AuthInfoTypes,
  MovieReviewsTypes,
} from "../../prop-types/prop";
import Footer from "../footer/footer";
import User from "../headers/user";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../spinner/Loading";
import {
  getSelectFilm,
  getSelectFilmLoaded,
} from "../../redux/films-data/films-selectors";
import { fetchSelectedFilm } from "../../redux/films-data/films-api-action";

const MoviePage = ({ film, movieMoreLike, movieReviews }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);

  const selectFilm = useSelector(getSelectFilm);
  const isSelectFilmLoaded = useSelector(getSelectFilmLoaded);
  console.log(selectFilm);
  const [select, setSelect] = useState("desk");

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
  }, [dispatch, id]);

  if (isSelectFilmLoaded) {
    return <Loading />;
  }

  const { name, posterImage, bacgroundImage, genre, released, isFavorite } =
    selectFilm;

  const getByType = (type) => {
    switch (type) {
      case "desk":
        return <MoviePageDesc film={film} />;
      case "details":
        return <MoviePageDetails film={film} />;
      case "reviews":
        return <MoviePageReviews movieReviews={movieReviews} />;
    }
    return <MoviePageDesc film={film} />;
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <User />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to="/films/:id/review" className="btn movie-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li
                    className={`movie-nav__item ${
                      select === "desk" && `movie-nav__item--active`
                    }`}
                  >
                    <p
                      className="movie-nav__link"
                      onClick={() => setSelect("desk")}
                    >
                      Overview
                    </p>
                  </li>
                  <li
                    className={`movie-nav__item ${
                      select === "details" && `movie-nav__item--active`
                    }`}
                  >
                    <p
                      className="movie-nav__link"
                      onClick={() => setSelect("details")}
                    >
                      Details
                    </p>
                  </li>
                  <li
                    className={`movie-nav__item ${
                      select === "reviews" && `movie-nav__item--active`
                    }`}
                  >
                    <p
                      className="movie-nav__link"
                      onClick={() => setSelect("reviews")}
                    >
                      Reviews
                    </p>
                  </li>
                </ul>
              </nav>
              {getByType(select)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieMoreLike movieMoreLike={movieMoreLike} />
        </section>

        <Footer />
      </div>
    </>
  );
};

MoviePage.protTypes = {
  film: PropTypes.arrayOf(FilmTypes.isRequired),
  movieMoreLike: PropTypes.arrayOf(MovieMoreLikeTypes.isRequired),
  authInfo: PropTypes.arrayOf(AuthInfoTypes.isRequired),
  movieReviews: PropTypes.arrayOf(MovieReviewsTypes.isRequired),
};

export default MoviePage;
