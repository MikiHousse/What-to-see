import React from "react";
import MovieCard from "../movie-card/movie-card";

const MovieList = ({ films, filmList = films.length }) => {
  const movieList = (list) => list.slice(0, filmList);
  return (
    <div className="catalog__movies-list">
      {movieList(films).map((card) => {
        return <MovieCard key={card.id} item={card} />;
      })}
    </div>
  );
};

export default MovieList;
