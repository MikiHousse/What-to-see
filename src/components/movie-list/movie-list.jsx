import React, { useCallback, useState, useEffect } from "react";
import MovieCard from "../movie-card/movie-card";

const MovieList = ({ movieCards }) => {
  return (
    <div className="catalog__movies-list">
      {movieCards.map((card) => {
        return <MovieCard key={card.id} item={card} />;
      })}
    </div>
  );
};

export default MovieList;
