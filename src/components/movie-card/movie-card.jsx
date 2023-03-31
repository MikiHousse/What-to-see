import React from "react";
import { MovieCardTypes } from "../../prop-types/prop";

export const MovieCard = ({ item = {} }) => {
  const { href, img, name } = item;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={href}>
          {name}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  item: MovieCardTypes.isRequired,
};

export default MovieCard;
