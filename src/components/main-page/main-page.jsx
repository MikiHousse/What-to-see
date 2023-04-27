import React from "react";
import PropTypes from "prop-types";
import {
  MovieСategoriesTypes,
  FilmTypes,
  AuthInfoTypes,
} from "../../prop-types/prop";

import MovieList from "../movie-list/movie-list";
import { Link } from "react-router-dom";
import { SortGenre } from "../genre-sort/sort-genre";
import {
  getGenre,
  getFilms,
  getCountFilmList,
  getSelectFilm,
} from "../../redux/films-data/films-selectors";
import { useDispatch, useSelector } from "react-redux";
import { genreChange, moreFilms } from "../../redux/films-data/films-actions";
import ShowMore from "../show-more/show-more";
import Footer from "../footer/footer";
import User from "../headers/user";
import { filtrMovieList } from "../../utils/utils";

const MainPage = () => {
  const films = useSelector(getFilms);
  const genre = useSelector(getGenre);
  const filmList = useSelector(getCountFilmList);
  const dispatch = useDispatch();
  const selectFilm = useSelector(getSelectFilm);
  console.log(selectFilm);

  const onSelectGenreClick = (filmGenre) => {
    dispatch(genreChange(filmGenre));
  };

  const showMore = () => {
    dispatch(moreFilms(filmList));
  };

  const movieList = filtrMovieList(films, genre);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <User />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`/player/:id`}
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
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <SortGenre films={films} genre={genre} onClick={onSelectGenreClick} />
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
