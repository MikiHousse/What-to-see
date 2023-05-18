import { SET_REQUIRE_AUTHORIZATION, SET_LOGIN, SET_LOGOUT, REDIRECT_TO_ROUTE, SET_USER_INFO} from "./user-action-type";
import { createAction } from "@reduxjs/toolkit";

export const setRequireAuthorization = createAction(SET_REQUIRE_AUTHORIZATION)

export const setSubmitLogin = createAction(SET_LOGIN, (action) => ({
  payload: action,
}))

export const setSubmitLogout = createAction(SET_LOGOUT, (action) => ({
  payload: action
}))

export const redirectToRoute = createAction(REDIRECT_TO_ROUTE, (action) => ({
  payload: action
}))

export const setUserInfo = createAction(SET_USER_INFO, (action) => ({
  payload: action
}))









