import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Videoplayer from "../videoplayer/videoplayer";
import { ApiRoute } from "../../utils/const";

const FilmCard = ({ item = {} }) => {
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
    <Link
      to={`${ApiRoute.FILMS}/${id}`}
      className="small-movie-card catalog__movies-card"
      style={{ color: "#c9b37e" }}
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
        <p className="small-movie-card__link">{name}</p>
      </h3>
    </Link>
  );
};

export default FilmCard;
