import { createReducer } from "@reduxjs/toolkit";
import {all} from '../mock-data'
import { genreChange, loadFilms, resetGenre } from "./actions";
import {adapterFilms} from '../adapter'


const firstGenre = all

const initialState = {
  genre: firstGenre,
  films: [],
  isDataLoaded: false
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
      state.genre = MovieСategories[0]
    })
})
