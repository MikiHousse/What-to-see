import { requireAuthorization, setUserInfo, redirectToRoute } from "./user-actions";
import { AppRoute, AuthorizationStatus, ApiRoute } from "../../utils/const";

export const loginAction = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
}

export const checkAuthAction = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
}

export const fetchUserInfo = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then((data) => dispatch(setUserInfo(data.data)))
    .catch(() => {console.log('Error fetch user info')})
}

export const logoutAction = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
}
