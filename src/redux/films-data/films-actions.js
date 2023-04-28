import { SELECT_GENRE, RESET_GENRE, LOAD_FILMS, SHOW_MORE_FILMS, SELECT_FILM, REVIEWS_FILM, REVIEW_SENDING, REDIRECT_TO_ROUTE, REVIEW_IS_LOADING, FAVORITE_IS_LOADING } from "./films-action-type";
import { createAction } from "@reduxjs/toolkit";

const genreChange = createAction(SELECT_GENRE, (genre) => ({
  payload: genre,
}))

const resetGenre = createAction(RESET_GENRE)

const loadFilms = createAction(LOAD_FILMS, (films) => ({
  payload: films,
}))

export const moreFilms = createAction(SHOW_MORE_FILMS, (films) => ({
  payload: films
}))

export const selectedFilm = createAction(SELECT_FILM, (selectFilm) => ({
  payload: selectFilm
}))

export const loadReviews = createAction(REVIEW_SENDING, (review) => ({
  payload: review
}))

export const redirectToRoute = createAction(REDIRECT_TO_ROUTE, (redirect) => ({
  payload: redirect
}))

export const reviewIsLoading = createAction(REVIEW_IS_LOADING, (loading) => ({
  payload: loading
}))

export const favoriteFilms = createAction(FAVORITE_IS_LOADING, (film) => ({
  payload: film
}))



export {genreChange, resetGenre, loadFilms}
