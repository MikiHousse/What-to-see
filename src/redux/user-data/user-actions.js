import { REQUIRE_AUTHORIZATION, LOGIN, LOGOUT} from "./user-action-type";
import { createAction } from "@reduxjs/toolkit";

export const requireAuthorization = createAction(REQUIRE_AUTHORIZATION)

export const submitLogin = createAction(LOGIN, (authData) => ({
  payload: authData,
}))

export const submitLogout = createAction(LOGOUT, (noAuthData) => ({
  payload: noAuthData
}))










