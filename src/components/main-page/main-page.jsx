import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  MovieСategoriesTypes,
  FilmTypes,
  AuthInfoTypes,
} from "../../prop-types/prop";

import MovieList from "../movie-list/movie-list";
import { SortGenre } from "../genre-sort/sort-genre";
import ShowMore from "../show-more/show-more";
import Footer from "../footer/footer";
import User from "../user/user";

import {
  getGenre,
  getFilms,
  getCountFilmList,
  getPromoFilm,
} from "../../redux/films-data/films-selectors";
import {
  genreChange,
  moreFilms,
  resetGenre,
} from "../../redux/films-data/films-actions";
import {
  addFavorite,
  fetchPromoFilm,
} from "../../redux/films-data/films-api-action";
import { filtrMovieList, checkFavorite, userIsAuth } from "../../utils/utils";
import Logo from "../logo/logo";
import Logout from "../logout/logout";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";

const MainPage = () => {
  const films = useSelector(getFilms);
  const genres = useSelector(getGenre);
  const filmList = useSelector(getCountFilmList);
  const dispatch = useDispatch();
  const promoFilms = useSelector(getPromoFilm);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
    isFavorite,
  } = promoFilms;

  useEffect(() => {
    dispatch(fetchPromoFilm());
    return () => {
      dispatch(resetGenre());
    };
  }, [dispatch]);

  const addFavor = (e) => {
    e.preventDefault();
    dispatch(addFavorite(id, checkFavorite(isFavorite)));
  };

  const onSelectGenreClick = (filmGenre) => {
    dispatch(genreChange(filmGenre));
  };

  const showMore = () => {
    dispatch(moreFilms(filmList));
  };

  const movieList = filtrMovieList(films, genres);

  return (
    <>
      <section className="movie-card">
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
            {userIsAuth(authorizationStatus) ? <Logout /> : ""}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`/player/${id}`}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content" style={{ background: "rgb(29,8,3)" }}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <SortGenre
            films={films}
            genre={genres}
            onClick={onSelectGenreClick}
          />
          <MovieList films={movieList} filmList={filmList} />
          {movieList.length > filmList ? (
            <ShowMore showMore={showMore} filmList={filmList} />
          ) : (
            ``
          )}
        </section>

        <Footer />
      </div>
    </>
  );
};

MainPage.protTypes = {
  movieСategories: PropTypes.arrayOf(MovieСategoriesTypes.isRequired),
  film: PropTypes.arrayOf(FilmTypes.isRequired),
  authInfo: PropTypes.arrayOf(AuthInfoTypes.isRequired),
};

export default MainPage;
