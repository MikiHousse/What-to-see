import { AuthorizationStatus, route } from "../mock-data";
import { loadFilms, requireAuthorization } from "./actions";
import { AppRoute } from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(route.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
}

export const checkAuthAction = () => (dispatch, _getState, api) => {
  api.get(route.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
}

export const loginAction = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(route.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
}
