import { createReducer } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../utils/const";
import { submitLogout, requireAuthorization, submitLogin, setUserInfo } from "./user-actions";
import { loginAction } from "./user-api-action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: []
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(submitLogin, (_, action) => {
      loginAction(action.payload)
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload
    })
    .addCase(submitLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH
    })
})

export {user}
