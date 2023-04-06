import React, { useState } from "react";
import { MovieCardTypes } from "../../prop-types/prop";
import Videoplayer from "../videoplayer/videoplayer";

export const MovieCard = ({
  item = {},
  onMouseEnter,
  onMouseLeave,
  activeItem,
}) => {
  const { href, img, name, video_link } = item;

  const handleMouseEnter = () => {
    onMouseEnter(item);
  };
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="small-movie-card__image">
        {/* <img src={img} alt={name} width="280" height="175" /> */}
        <Videoplayer vid={video_link} img={img} />
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
