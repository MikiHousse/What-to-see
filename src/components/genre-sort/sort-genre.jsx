import React from "react";
import { Link } from "react-router-dom";
import { AppRoute, MAX_COUNT_GENRES } from "../../utils/const";

const SortGenre = ({ films, genre, onClick }) => {
  const genresFilms = films.map((film) => film.genre);

  const genresFiltred = Array.from(new Set(genresFilms)).slice(
    0,
    MAX_COUNT_GENRES
  );
  genresFiltred.unshift("All genres");

  return (
    <ul className="catalog__genres-list">
      {genresFiltred.map((item) => {
        const active = genre === item ? `catalog__genres-item--active` : ``;

        return (
          <li
            key={item + 1}
            className={`catalog__genres-item ${active}`}
            tabIndex="0"
            onClick={() => {
              onClick(item);
            }}
          >
            <Link to={AppRoute.MAIN} className="catalog__genres-link">
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SortGenre;
