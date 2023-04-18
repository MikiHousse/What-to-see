import { createReducer } from "@reduxjs/toolkit";
import {all, Film} from '../mock-data'
import { genreChange, resetGenre } from "./actions";

const firstGenre = all

const initialState = {
  genre: firstGenre,
  films: Film
}

export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(genreChange, (state, action) => {
      state.genre = action.payload
    })
    .addCase(resetGenre, (state) => {
      state.genre = MovieСategories[0]
    })
})
