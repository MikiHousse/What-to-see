import { REQUIRE_AUTHORIZATION, LOGIN, LOGOUT, REDIRECT_TO_ROUTE, USER_INFO} from "./user-action-type";
import { createAction } from "@reduxjs/toolkit";

export const requireAuthorization = createAction(REQUIRE_AUTHORIZATION)

export const submitLogin = createAction(LOGIN, (action) => ({
  payload: action,
}))

export const submitLogout = createAction(LOGOUT, (action) => ({
  payload: action
}))

export const redirectToRoute = createAction(REDIRECT_TO_ROUTE, (action) => ({
  payload: action
}))

export const setUserInfo = createAction(USER_INFO, (action) => ({
  payload: action
}))









