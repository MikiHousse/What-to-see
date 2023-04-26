import { requireAuthorization } from "./user-actions";
import { AppRoute, AuthorizationStatus, ApiRoute } from "../../utils/const";
import { redirectToRoute } from "../films-data/films-actions";

export const checkAuthAction = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
}

export const loginAction = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
}

export const logoutAction = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
}
