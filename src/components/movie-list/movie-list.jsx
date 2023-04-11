import React from "react";
import MovieCard from "../movie-card/movie-card";

const MovieList = ({ film }) => {
  return (
    <div className="catalog__movies-list">
      {film.map((card) => {
        return <MovieCard key={card.id} item={card} />;
      })}
    </div>
  );
};

export default MovieList;
