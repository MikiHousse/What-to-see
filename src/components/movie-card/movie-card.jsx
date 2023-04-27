import React, { useEffect, useRef, useState } from "react";
import Videoplayer from "../videoplayer/videoplayer";
import { ApiRoute } from "../../utils/const";
import { Link } from "react-router-dom";

const MovieCard = ({ item = {} }) => {
  const { previewImage, name, videoLink, id } = item;
  const [isPlay, setIsPlay] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    let delay;
    if (isPlay) {
      delay = setTimeout(() => videoRef.current.play(), 1000);
    } else {
      videoRef.current.load();
    }
    return () => clearTimeout(delay);
  }, [isPlay]);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setIsPlay(true)}
      onMouseLeave={() => setIsPlay(false)}
    >
      <div className="small-movie-card__image">
        <Videoplayer
          videoLink={videoLink}
          img={previewImage}
          play={isPlay}
          videoRef={videoRef}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default MovieCard;
