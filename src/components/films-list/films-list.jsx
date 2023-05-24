import React from "react";
import FilmCard from "../film-card/film-card";

const FilmsList = ({ filmsList, countFilmsList = filmsList.length }) => {
  const filmSliceList = (list) => list.slice(0, countFilmsList);
  return (
    <div className="catalog__movies-list">
      {filmSliceList(filmsList).map((card) => {
        return <FilmCard key={card.id} item={card} />;
      })}
    </div>
  );
};

export default FilmsList;
