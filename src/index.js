import React from "react";
import ReactDom from 'react-dom'

import App from './components/app/app'
import {MovieCards} from './mock-data'

ReactDom.render(
  <App movieCards={MovieCards}/>,
  document.getElementById(`root`),
);
