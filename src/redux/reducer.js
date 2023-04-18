import { createReducer } from "@reduxjs/toolkit";
import {all, Film} from '../mock-data'
import { genreChange, loadFilms, resetGenre } from "./actions";
import {adapterFilms} from '../adapter'
import createAPI from "../api";


const firstGenre = all

const initialState = {
  genre: firstGenre,
  films: [],
  loadsFilms: false
}

export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(genreChange, (state, action) => {
      state.genre = action.payload
    })
    .addCase(loadFilms, (state, action) => {
      state.films = adapterFilms(action.payload);
      state.loadsFilms = true
    })
    .addCase(resetGenre, (state) => {
      state.genre = MovieСategories[0]
    })
})
