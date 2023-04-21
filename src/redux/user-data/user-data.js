import { createReducer } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../utils/const";
import { requireAuthorization, submitLogin } from "../actions";

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
})

export {user}
