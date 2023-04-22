import { REQUIRE_AUTHORIZATION, LOGIN } from "./user-action-type";
import { createAction } from "@reduxjs/toolkit";

const requireAuthorization = createAction(REQUIRE_AUTHORIZATION)

const submitLogin = createAction(LOGIN, (authData) => ({
  payload: authData,
}))




export { requireAuthorization, submitLogin}





