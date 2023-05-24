import React from "react";
import { Link } from "react-router-dom";
import { AppRoute, MAX_COUNT_GENRES } from "../../utils/const";

const SortGenre = ({ film, genre, onClick }) => {
  const filmGenres = film.map((item) => item.genre);

  const genresFiltеr = Array.from(new Set(filmGenres)).slice(
    0,
    MAX_COUNT_GENRES
  );
  genresFiltеr.unshift("All genres");

  return (
    <ul className="catalog__genres-list">
      {genresFiltеr.map((item) => {
        const isActive = genre === item ? `catalog__genres-item--active` : ``;

        return (
          <li
            key={item + 1}
            className={`catalog__genres-item ${isActive}`}
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
