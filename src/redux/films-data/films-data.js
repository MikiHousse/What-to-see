import { createReducer } from "@reduxjs/toolkit";
import { ALL_GENRES, LIST_COUNT_FILMS } from "../../utils/const";
import { genreChange, loadFilms, resetGenre, moreFilms,selectedFilm } from "../films-data/films-actions";
import {adapterFilms, selectAdapterFilm} from './adapter'

const initialState = {
  genre: ALL_GENRES,
  films: [],
  isDataLoaded: false,
  countFilmsList: LIST_COUNT_FILMS,
  selectFilm: [],
  isSelectFilmLoaded: false,
}

export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(genreChange, (state, action) => {
      state.genre = action.payload
    })
    .addCase(loadFilms, (state, action) => {
      state.films = adapterFilms(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(resetGenre, (state) => {
      state.countFilmsList = LIST_COUNT_FILMS
    })
    .addCase(moreFilms, (state, action) => {
      state.countFilmsList = action.payload + LIST_COUNT_FILMS
    })
    .addCase(selectedFilm, (state, action) => {
      state.selectFilm = selectAdapterFilm(action.payload)
      state.isSelectFilmLoaded = true
    })
})
