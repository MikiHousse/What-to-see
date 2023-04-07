import React, { useEffect, useRef, useState } from "react";
import { MovieCardTypes } from "../../prop-types/prop";
import Videoplayer from "../videoplayer/videoplayer";

export const MovieCard = ({ item = {} }) => {
  const { href, img, name, video_link } = item;
  const [play, setPlay] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    let left;
    if (play) {
      left = setTimeout(() => videoRef.current.play(), 1000);
    } else {
      videoRef.current.load();
    }
    return () => clearTimeout(left);
  }, [play]);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <div className="small-movie-card__image">
        <Videoplayer
          videoLink={video_link}
          img={img}
          play={play}
          videoRef={videoRef}
        />
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
