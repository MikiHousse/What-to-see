import { SELECT_GENRE, RESET_GENRE, LOAD_FILMS, SHOW_MORE_FILMS, SELECT_FILM } from "./films-action-type";
import { createAction } from "@reduxjs/toolkit";

const genreChange = createAction(SELECT_GENRE, (genre) => ({
  payload: genre,
}))

const resetGenre = createAction(RESET_GENRE)

const loadFilms = createAction(LOAD_FILMS, (films) => ({
  payload: films,
}))

export const moreFilms = createAction(SHOW_MORE_FILMS, (films) => ({
  payload: films
}))

export const selectedFilm = createAction(SELECT_FILM, (selectFilm) => ({
  payload: selectFilm
}))


export {genreChange, resetGenre, loadFilms}
