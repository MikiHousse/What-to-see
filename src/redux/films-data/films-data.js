import { createReducer } from "@reduxjs/toolkit";
import { ALL_GENRES, FetchStatus, LIST_COUNT_FILMS } from "../../utils/const";
import { setGenreChange, setLoadedFilms, setResetGenre, setShowMoreFilms, setSelectedFilm, setLoadedReviews, setReviewIsSending, setFavoriteFilms, setPromoFilm } from "../films-data/films-actions";
import {adapterFilms, selectAdapterFilm} from './adapter'

const initialState = {
  genre: ALL_GENRES,
  films: [],
  isDataLoaded: false,
  filmsListCount: LIST_COUNT_FILMS,
  selectFilm: [],
  isSelectFilmLoaded: false,
  reviews: [],
  isReviewSending: FetchStatus.DONE,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
  promoFilm: [],
  isPromoFilmLoaded: false,
}

export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreChange, (state, action) => {
      state.genre = action.payload
    })
    .addCase(setLoadedFilms, (state, action) => {
      state.films = adapterFilms(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(setResetGenre, (state) => {
      state.genre = ALL_GENRES
    })
    .addCase(setShowMoreFilms, (state, action) => {
      state.filmsListCount = action.payload + LIST_COUNT_FILMS
    })
    .addCase(setSelectedFilm, (state, action) => {
      state.selectFilm = selectAdapterFilm(action.payload)
      state.isSelectFilmLoaded = true
    })
    .addCase(setLoadedReviews, (state, action) => {
      state.reviews = action.payload
    })
    .addCase(setReviewIsSending, (state, action) => {
      state.isReviewSending = action.payload
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.favoriteFilms = adapterFilms(action.payload)
      state.isFavoriteFilmsLoaded = true
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = selectAdapterFilm(action.payload)
      state.isPromoFilmLoaded = true
    })
})
