import React from "react";
import ReactDom from 'react-dom'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import {createAPI} from './api'
import App from './components/app/app'
import { MovieСategories, Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews, AuthorizationStatus} from './mock-data'
import rootReducer from "./redux/root-reducer";
import { checkAuthAction, fetchFilmsList } from "./redux/api-action";
import { requireAuthorization } from "./redux/actions";
import { redirect } from "./redirect";

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))

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
      <App movieСategories={MovieСategories} rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews}/>
  </Provider>,
  document.getElementById(`root`),
);
