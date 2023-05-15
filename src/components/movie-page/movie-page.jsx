import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MoviePageDesc from "./movie-page-desc/movie-page-desc";
import MoviePageDetails from "./movie-page-details/movie-page-details";
import MoviePageReviews from "./movie-page-reviews/movie-page-reviews";
import MovieMoreLike from "./movie-more-like/movie-more-like";
import Footer from "../footer/footer";
import User from "../user/user";
import Loading from "../spinner/Loading";

import {
  FilmTypes,
  MovieMoreLikeTypes,
  AuthInfoTypes,
  MovieReviewsTypes,
} from "../../prop-types/prop";
import {
  getReviewsFilm,
  getSelectFilm,
  getSelectFilmLoaded,
} from "../../redux/films-data/films-selectors";
import {
  addFavorite,
  fetchPromoFilm,
  fetchReviewsFilm,
  fetchSelectedFilm,
} from "../../redux/films-data/films-api-action";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { ApiRoute, AuthorizationStatus } from "../../utils/const";
import Logo from "../logo/logo";
import Logout from "../logout/logout";

const check = (item) => (!item ? 1 : 0);

const MoviePage = ({ film, movieMoreLike, movieReviews }) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector(getReviewsFilm);
  const selectFilm = useSelector(getSelectFilm);
  const isSelectFilmLoaded = useSelector(getSelectFilmLoaded);
  const [select, setSelect] = useState("desk");
  const { name, posterImage, backgroundImage, genre, released, isFavorite } =
    selectFilm;

  const addFavor = (e) => {
    e.preventDefault();
    dispatch(addFavorite(id, check(isFavorite)));
  };

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
    dispatch(fetchReviewsFilm(id));
    dispatch(fetchPromoFilm(id));
  }, [dispatch, id]);

  if (!isSelectFilmLoaded) {
    return <Loading />;
  }

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
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <div className="user-block">
              <div className="user-block__avatar">
                <User />
              </div>
              <Logout />
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`${ApiRoute.PLAYER}/${id}`}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                {/* TODO: сделать компонент из кнопки  */}
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={addFavor}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {isFavorite ? (
                      <use xlinkHref="#in-list"></use>
                    ) : (
                      <use xlinkHref="#add"></use>
                    )}
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ? (
                  <Link
                    to={`${ApiRoute.FILMS}/${id}/${ApiRoute.REVIEW}`}
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                ) : (
                  ``
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            {/* TODO: вынети в отдельный компонент  */}
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
          <MovieMoreLike
            movieMoreLike={movieMoreLike}
            genre={genre}
            index={id}
          />
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
