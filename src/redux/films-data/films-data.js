import { createReducer } from "@reduxjs/toolkit";
import { ALL_GENRES, LIST_COUNT_FILMS } from "../../utils/const";
import { genreChange, loadFilms, resetGenre, moreFilms, } from "../actions";
import {adapterFilms} from '../adapter'


const firstGenre = ALL_GENRES

const initialState = {
  genre: firstGenre,
  films: [],
  isDataLoaded: false,
  countFilmsList: LIST_COUNT_FILMS,
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
    // .addCase(requireAuthorization, (state, action) => {
    //   state.authorizationStatus = action.payload;
    // })
    // .addCase(submitLogin, (_, action) => {
    //   loginAction(action.payload)
    // })
})
