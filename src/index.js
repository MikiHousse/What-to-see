import React from "react";
import ReactDom from 'react-dom'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from './components/app/app'
import { MovieСategories, Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews} from './mock-data'
import rootReducer from "./redux/root-reducer";

const store = configureStore({
  reducer: rootReducer,
})

ReactDom.render(
  <Provider store={store}>
      <App movieСategories={MovieСategories} rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews}/>
  </Provider>,
  document.getElementById(`root`),
);
