import { createReducer } from "@reduxjs/toolkit";
import {all, countList} from '../mock-data'
import { genreChange, loadFilms, resetGenre, moreFilms } from "./actions";
import {adapterFilms} from '../adapter'


const firstGenre = all

const initialState = {
  genre: firstGenre,
  films: [],
  isDataLoaded: false,
  countFilmsList: countList
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
      state.countFilmsList = countList
    })
    .addCase(moreFilms, (state, action) => {
      state.countFilmsList = action.payload + countList
    })
})
