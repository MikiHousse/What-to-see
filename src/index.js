import React from "react";
import ReactDom from 'react-dom'

import App from './components/app/app'
import {MovieCards, MovieСategories, Rating} from './mock-data'

ReactDom.render(
  <App movieCards={MovieCards} movieСategories={MovieСategories} rating={Rating}/>,
  document.getElementById(`root`),
);
