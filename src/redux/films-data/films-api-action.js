import { ApiRoute, FetchStatus } from "../../utils/const";
import { setLoadedFilms, setSelectedFilm, setLoadedReviews, setReviewIsSending, setFavoriteFilms, setPromoFilm } from "./films-actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return (
    api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(setLoadedFilms(data)))
    .catch(() => {})
    )
}

export const fetchSelectedFilm = (id) => (dispatch, _getState, api) => {
  return (
    api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(setSelectedFilm(data)))
    .catch(() => {})
    )
};

export const fetchReviewsFilm = (id) => (dispatch, _getState, api) => {
  return (
    api.get(`${ApiRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(setLoadedReviews(data)))
    .catch(() => {})
    )
}

export const sendingReview = ({rating, comment}, id) => (dispatch, _getState, api) => {
  return (
    api.post(`${ApiRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(setLoadedReviews(data)))
    .then(() => dispatch(setReviewIsSending(FetchStatus.DONE)))
    .catch(() => dispatch(setReviewIsSending(FetchStatus.ERROR)))
    .finally(() => setTimeout(() => (dispatch(setReviewIsSending(FetchStatus.FINALLY))), 500))
    )
}

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => {
  return (
    api.get(ApiRoute.FAVORITE)
    .then(({data}) => dispatch(setFavoriteFilms(data)))
    .catch(() => {})
    )
}

export const toggleFavorite = (id, status) => (dispatch, _getState, api) => {
  return (
    api.post(`${ApiRoute.FAVORITE}/${id}/${status}`)
    .then(() => dispatch(fetchSelectedFilm(id)))
    .then(() => dispatch(fetchPromoFilm(id)))
    .catch(() => {})
    )
}

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return (
    api.get(ApiRoute.PROMO)
    .then(({data}) => dispatch(setPromoFilm(data)))
    .catch(() => {})
    )
}
