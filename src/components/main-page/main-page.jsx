import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  MovieСategoriesTypes,
  FilmTypes,
  AuthInfoTypes,
} from "../../prop-types/prop";

import MovieList from "../movie-list/movie-list";
import SortGenre from "../genre-sort/sort-genre";
import ShowMore from "../show-more/show-more";
import Footer from "../footer/footer";

import {
  getGenre,
  getFilms,
  getCountFilmList,
} from "../../redux/films-data/films-selectors";
import {
  setGenreChange,
  setShowMoreFilms,
  setResetGenre,
} from "../../redux/films-data/films-actions";
import { filterFilmsList } from "../../utils/utils";
import PromoFilm from "./components/promo-film";

const MainPage = () => {
  const movies = useSelector(getFilms);
  const genre = useSelector(getGenre);
  const countMoviesList = useSelector(getCountFilmList);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setResetGenre());
    };
  }, [dispatch]);

  const onSelectGenreClick = (filmGenre) => {
    dispatch(setGenreChange(filmGenre));
  };

  const onShowMoreClick = () => {
    dispatch(setShowMoreFilms(countMoviesList));
  };

  const moviesList = filterFilmsList(movies, genre);
  console.log(moviesList);

  return (
    <>
      <PromoFilm />

      <div className="page-content" style={{ background: "rgb(29,8,3)" }}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <SortGenre
            movies={movies}
            genre={genre}
            onClick={onSelectGenreClick}
          />
          <MovieList
            moviesList={moviesList}
            countMoviesList={countMoviesList}
          />
          {moviesList.length > countMoviesList ? (
            <ShowMore
              onShowMoreClick={onShowMoreClick}
              countMoviesList={countMoviesList}
            />
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
