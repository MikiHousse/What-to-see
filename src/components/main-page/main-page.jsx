import React from "react";
import MovieCard from "../movie-card/movie-card";
import PropTypes from "prop-types";
import { MovieCardTypes } from "../../prop-types/prop";

const MainPage = ({ movieCards }) => {
  return (
    <>
      {movieCards.map((card) => {
        return <MovieCard key={card.id} item={card} />;
      })}
    </>
  );
};

MainPage.propTypes = {
  movieCards: PropTypes.arrayOf(MovieCardTypes.isRequired),
};

export default MainPage;
