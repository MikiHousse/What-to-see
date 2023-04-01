import React from "react";
import ReactDom from 'react-dom'

import App from './components/app/app'
import {MovieCards, MovieСategories} from './mock-data'

ReactDom.render(
  <App movieCards={MovieCards} movieСategories={MovieСategories}/>,
  document.getElementById(`root`),
);
