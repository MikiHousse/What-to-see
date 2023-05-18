import { createReducer } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../utils/const";
import { setSubmitLogout, setRequireAuthorization, setSubmitLogin, setUserInfo } from "./user-actions";
import { loginAction } from "./user-api-action";

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: []
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(setRequireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setSubmitLogin, (_, action) => {
      loginAction(action.payload)
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload
    })
    .addCase(setSubmitLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH
    })
})

export {user}
