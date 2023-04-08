import React from "react";
import ReactDom from 'react-dom'

import App from './components/app/app'
import {MovieCards, MovieСategories, Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews, MovieDetails} from './mock-data'

ReactDom.render(
  <App movieCards={MovieCards} movieСategories={MovieСategories} rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews} movieDetails={MovieDetails}/>,
  document.getElementById(`root`),
);
