import React from "react";
import ReactDom from 'react-dom'

import App from './components/app/app'
import { MovieСategories, Rating, MovieMoreLike ,Film, AuthInfo, MovieReviews} from './mock-data'

ReactDom.render(
  <App movieСategories={MovieСategories} rating={Rating} movieMoreLike={MovieMoreLike} film={Film} authInfo={AuthInfo} movieReviews={MovieReviews}/>,
  document.getElementById(`root`),
);
