import React from "react";
import { Link } from "react-router-dom";
import { genresMax } from "../../mock-data";

const SortGenre = ({ films, genre, onClick }) => {
  const filmGenres = films.map((film) => film.genre);
  console.log(genre);

  const filtredGenres = Array.from(new Set(filmGenres));
  filtredGenres.slice(0, genresMax);
  filtredGenres.unshift("All genres");

  return (
    <ul className="catalog__genres-list">
      {filtredGenres.map((item) => {
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
            <Link to="/" className="catalog__genres-link">
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { SortGenre };
