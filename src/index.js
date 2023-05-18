import React from "react";
import ReactDom from 'react-dom'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { createAPI } from './api'
import App from './components/app/app'
import {Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews} from './mock-data'
import { AuthorizationStatus } from "./utils/const";
import rootReducer from "./redux/root-reducer";
import { checkAuthAction } from "./redux/user-data/user-api-action";
import { fetchFilmsList } from "./redux/films-data/films-api-action";
import { setRequireAuthorization } from "./redux/user-data/user-actions";
import { redirect } from "./redirect";

const api = createAPI(() => store.dispatch(setRequireAuthorization(AuthorizationStatus.NO_AUTH)))

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  }).concat(redirect)
})

store.dispatch(checkAuthAction())
store.dispatch(fetchFilmsList())

ReactDom.render(
  <Provider store={store}>
      <App rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews}/>
  </Provider>,
  document.getElementById(`root`),
);
