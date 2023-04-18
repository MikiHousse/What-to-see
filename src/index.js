import React from "react";
import ReactDom from 'react-dom'
import { configureStore, createAsyncThunk, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {createAPI} from './api'
import App from './components/app/app'
import { MovieСategories, Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews} from './mock-data'
import rootReducer from "./redux/root-reducer";
import thunk from "redux-thunk";

const api = createAPI()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  })
})

ReactDom.render(
  <Provider store={store}>
      <App movieСategories={MovieСategories} rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews}/>
  </Provider>,
  document.getElementById(`root`),
);
