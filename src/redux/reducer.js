import { createReducer } from "@reduxjs/toolkit";
import {all, countList, AuthorizationStatus} from '../mock-data'
import { genreChange, loadFilms, resetGenre, moreFilms, requireAuthorization, submitLogin } from "./actions";
import {adapterFilms} from '../adapter'
import { loginAction } from "./api-action";


const firstGenre = all

const initialState = {
  genre: firstGenre,
  films: [],
  isDataLoaded: false,
  countFilmsList: countList,
  authorizationStatus: AuthorizationStatus.NO_AUTH
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(submitLogin, (_, action) => {
      loginAction(action.payload)
    })
})
