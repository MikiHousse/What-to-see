import { ApiRoute, FetchStatus } from "../../utils/const";
import { loadFilms, selectedFilm, loadReviews, reviewIsLoading, favoriteFilms, promotionalFilm } from "./films-actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
}

export const fetchSelectedFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(selectedFilm(data)))
    .catch(() => {})
);

export const fetchReviewsFilm = (id) => (dispatch, _getState, api) => (
    api.get(`${ApiRoute.COMMENTS}/${id}`)
      .then(({data}) => dispatch(loadReviews(data)))
      .catch(() => {})
  )

export const sendingReview = ({rating, comment}, id) => (dispatch, _getState, api) => (
    api.post(`${ApiRoute.COMMENTS}/${id}`, {rating, comment})
      .then(({data}) => dispatch(loadReviews(data)))
      .then(() => dispatch(reviewIsLoading(FetchStatus.DONE)))
      .catch(() => dispatch(reviewIsLoading(FetchStatus.ERROR)))
      .finally(() => setTimeout(() => (dispatch(reviewIsLoading(FetchStatus.FINALLY))), 500))
  )

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => dispatch(favoriteFilms(data)))
    .catch(() => {})
}

export const addFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`${ApiRoute.FAVORITE}/${id}/${status}`)
    .then(() => dispatch(fetchSelectedFilm(id)))
    .then(() => dispatch(fetchPromoFilm(id)))
    .catch(() => {})
}

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.PROMO)
  .then(({data}) => dispatch(promotionalFilm(data)))
  .catch(() => {})
}
