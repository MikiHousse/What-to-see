import { REQUIRE_AUTHORIZATION, LOGIN, LOGOUT, REDIRECT_TO_ROUTE, USER_DATA} from "./user-action-type";
import { createAction } from "@reduxjs/toolkit";

export const requireAuthorization = createAction(REQUIRE_AUTHORIZATION)

export const submitLogin = createAction(LOGIN, (authData) => ({
  payload: authData,
}))

export const submitLogout = createAction(LOGOUT, (noAuthData) => ({
  payload: noAuthData
}))

export const redirectToRoute = createAction(REDIRECT_TO_ROUTE, (redirect) => ({
  payload: redirect
}))

export const userData = createAction(USER_DATA, (state) => ({
  payload: state
}))









