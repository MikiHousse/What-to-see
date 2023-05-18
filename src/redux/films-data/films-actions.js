import { SET_GENRE_CHANGE, SET_RESET_GENRE, SET_LOADED_FILMS, SET_SHOW_MORE_FILMS, SET_SELECTED_FILM, SET_LOADED_REVIEWS, REDIRECT_TO_ROUTE, SET_REVIEW_IS_SENDING, SET_FAVORITE_FILMS, SET_PROMO_FILM } from "./films-action-type";
import { createAction } from "@reduxjs/toolkit";

export const setGenreChange = createAction(SET_GENRE_CHANGE, (genre) => ({
  payload: genre,
}))

export const setResetGenre = createAction(SET_RESET_GENRE)

export const setLoadedFilms = createAction(SET_LOADED_FILMS, (films) => ({
  payload: films,
}))

export const setShowMoreFilms = createAction(SET_SHOW_MORE_FILMS, (films) => ({
  payload: films
}))

export const setSelectedFilm = createAction(SET_SELECTED_FILM, (selectFilm) => ({
  payload: selectFilm
}))

export const setLoadedReviews = createAction(SET_LOADED_REVIEWS, (review) => ({
  payload: review
}))

export const redirectToRoute = createAction(REDIRECT_TO_ROUTE, (redirect) => ({
  payload: redirect
}))

export const setReviewIsSending = createAction(SET_REVIEW_IS_SENDING, (loading) => ({
  payload: loading
}))

export const setFavoriteFilms = createAction(SET_FAVORITE_FILMS, (film) => ({
  payload: film
}))

export const setPromoFilm = createAction(SET_PROMO_FILM, (film) => ({
  payload: film
}))
