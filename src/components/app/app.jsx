import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import { MovieCardTypes } from "../../prop-types/prop";

export const App = ({ movieCards }) => {
  return (
    <div>
      <MainPage movieCards={movieCards} />
    </div>
  );
};

App.protTypes = {
  movieCards: PropTypes.arrayOf(MovieCardTypes.isRequired),
};

export default App;
