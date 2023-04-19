import { SELECT_GENRE, RESET_GENRE, LOAD_FILMS } from "./action-type";
import { createAction } from "@reduxjs/toolkit";

const genreChange = createAction(SELECT_GENRE, (genre) => ({
  payload: genre,
}))

const resetGenre = createAction(RESET_GENRE)

const loadFilms = createAction(LOAD_FILMS, (films) => ({
  payload: films,
}))




export {genreChange, resetGenre, loadFilms}





