import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SortGenre from "../genre-sort/sort-genre";
import ShowMore from "../show-more/show-more";
import Footer from "../footer/footer";
import FilmPromo from "./components/film-promo";
import FilmsList from "../films-list/films-list";

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

const MainPage = () => {
  const film = useSelector(getFilms);
  const genre = useSelector(getGenre);
  const countFilmsList = useSelector(getCountFilmList);
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
    dispatch(setShowMoreFilms(countFilmsList));
  };

  const filmsList = filterFilmsList(film, genre);

  return (
    <>
      <FilmPromo />

      <div className="page-content" style={{ background: "rgb(29,8,3)" }}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <SortGenre film={film} genre={genre} onClick={onSelectGenreClick} />
          <FilmsList filmsList={filmsList} countFilmsList={countFilmsList} />
          {filmsList.length > countFilmsList ? (
            <ShowMore
              onShowMoreClick={onShowMoreClick}
              countFilmsList={countFilmsList}
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

export default MainPage;
