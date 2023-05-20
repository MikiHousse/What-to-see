import React from "react";
import MovieCard from "../movie-card/movie-card";

const MovieList = ({ moviesList, countMoviesList = moviesList.length }) => {
  const movieSliceList = (list) => list.slice(0, countMoviesList);
  return (
    <div className="catalog__movies-list">
      {movieSliceList(moviesList).map((card) => {
        return <MovieCard key={card.id} item={card} />;
      })}
    </div>
  );
};

export default MovieList;
