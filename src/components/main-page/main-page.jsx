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
import { filtrMovieList } from "../../utils/utils";
import PromoFilm from "./components/promo-film";

const MainPage = () => {
  const films = useSelector(getFilms);
  const genres = useSelector(getGenre);
  const filmList = useSelector(getCountFilmList);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setResetGenre());
    };
  }, [dispatch]);

  const onSelectGenreClick = (filmGenre) => {
    dispatch(setGenreChange(filmGenre));
  };

  const showMore = () => {
    dispatch(setShowMoreFilms(filmList));
  };

  const movieList = filtrMovieList(films, genres);

  return (
    <>
      <PromoFilm />

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
