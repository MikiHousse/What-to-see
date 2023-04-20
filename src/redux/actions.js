import { SELECT_GENRE, RESET_GENRE, LOAD_FILMS, SHOW_MORE_FILMS } from "./action-type";
import { createAction } from "@reduxjs/toolkit";

const genreChange = createAction(SELECT_GENRE, (genre) => ({
  payload: genre,
}))

const resetGenre = createAction(RESET_GENRE)

const loadFilms = createAction(LOAD_FILMS, (films) => ({
  payload: films,
}))

const moreFilms = createAction(SHOW_MORE_FILMS, (countFilmsList) => ({
  payload: countFilmsList
}))




export {genreChange, resetGenre, loadFilms, moreFilms}





