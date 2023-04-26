import { createReducer } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../utils/const";
import { submitLogout, requireAuthorization, submitLogin } from "./user-actions";
import { loginAction } from "./user-api-action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(submitLogin, (_, action) => {
      loginAction(action.payload)
    })
    .addCase(submitLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH
    })
})

export {user}
