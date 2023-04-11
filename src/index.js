import React from "react";
import ReactDom from 'react-dom'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from './components/app/app'
import { MovieСategories, Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews} from './mock-data'
import reducer from './redux/reducer'

const store = createStore(reducer, composeWithDevTools())

ReactDom.render(
  <Provider store={store}>
      <App movieСategories={MovieСategories} rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews}/>
  </Provider>,
  document.getElementById(`root`),
);
