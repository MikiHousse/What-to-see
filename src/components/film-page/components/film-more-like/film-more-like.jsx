import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ApiRoute, MORE_LIKE_COUNT } from "../../../../utils/const";
import { getFilms } from "../../../../redux/films-data/films-selectors";

const FilmMoreLike = ({ genre, index }) => {
  const films = useSelector(getFilms);

  const relatedFilms = films
    .filter((item) => item.genre === genre && item.id != index)
    .slice(0, MORE_LIKE_COUNT);

  return (
    <div className="catalog__movies-list">
      {relatedFilms.map((item) => {
        return (
          <Link
            style={{ color: "#c9b37e" }}
            to={`${ApiRoute.FILMS}/${item.id}`}
            key={item.id}
            className="small-movie-card catalog__movies-card"
          >
            <div className="small-movie-card__image">
              <img
                src={item.previewImage}
                alt={item.name}
                width="280"
                height="175"
              />
            </div>
            <h3 className="small-movie-card__title">
              <p className="small-movie-card__link" href="movie-page.html">
                {item.name}
              </p>
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default FilmMoreLike;
