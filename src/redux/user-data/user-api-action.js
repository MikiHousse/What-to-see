import { setRequireAuthorization, setUserInfo, redirectToRoute } from "./user-actions";
import { AppRoute, AuthorizationStatus, ApiRoute } from "../../utils/const";

export const loginAction = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(setRequireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
}

export const checkAuthAction = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(setRequireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
}

export const fetchUserInfo = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then((data) => dispatch(setUserInfo(data.data)))
    .catch(() => {console.log('Error fetch user info')})
}

export const logoutAction = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(setRequireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
}
