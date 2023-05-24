import React from "react";
import FilmCard from "../film-card/film-card";

const FilmsList = ({ moviesList, countMoviesList = moviesList.length }) => {
  const movieSliceList = (list) => list.slice(0, countMoviesList);
  return (
    <div className="catalog__movies-list">
      {movieSliceList(moviesList).map((card) => {
        return <FilmCard key={card.id} item={card} />;
      })}
    </div>
  );
};

export default FilmsList;
