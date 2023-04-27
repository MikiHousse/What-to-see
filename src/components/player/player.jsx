import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSelectFilm } from "../../redux/films-data/films-selectors";
import { fetchSelectedFilm } from "../../redux/films-data/films-api-action";

const toggleFullScreen = () => {
  const el = document.documentElement;

  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const hours = Math.floor(time / 3600);
    const formatHours = hours < 10 ? `0${hours}` : `${hours}`;
    const min = Math.floor(time / 60);
    const formatMin = min < 10 ? `0${min}` : `${min}`;
    const sec = Math.floor(time % 60);
    const formatSec = sec < 10 ? `0${sec}` : `${sec}`;
    return hours === 0
      ? `${formatHours}:${formatMin}:${formatSec}`
      : `${formatMin}:${formatSec}`;
  }
  return "00:00";
};

const Player = () => {
  const { id } = useParams();
  const selectFilm = useSelector(getSelectFilm);
  const playRef = useRef();
  const dispatch = useDispatch();
  const { videoLink, backgroundImage } = selectFilm;
  const [isPlaying, setIsPlaying] = useState(true);
  const [timePassed, setTimePassed] = useState(0);
  const [end, setEnd] = useState(0);
  const rangeRef = useRef();
  const time = (e) => setTimePassed(e.target.currentTime);
  const runTime = () => {
    setEnd(playRef.current.duration);
  };

  const handleFullScreen = (e) => {
    e.preventDefault();
    toggleFullScreen();
  };

  const handleClickPlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      playRef.current.play();
    } else {
      playRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="player">
        <video
          autoPlay={isPlaying}
          ref={playRef}
          src={videoLink}
          className="player__video"
          poster={backgroundImage}
          onTimeUpdate={time}
          onLoadedMetadata={runTime}
          muted
        ></video>

        <Link
          style={{ textDecoration: "none" }}
          to="/"
          type="button"
          className="player__exit"
        >
          Exit
        </Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                type="range"
                ref={rangeRef}
                defaultValue="0"
                className="player__progress"
                value="30"
                max="100"
              ></progress>{" "}
              <div className="player__toggler" style={{ left: `30%` }}>
                Toggler
              </div>
              {/* <input
                style={{ width: "100%" }}
                type="range"
                ref={rangeRef}
                defaultValue="0"
                onChange={handleRange}
              /> */}
            </div>
            <div className="player__time-value">
              {formatTime(end - timePassed)}
            </div>
          </div>

          <div className="player__controls-row">
            {isPlaying ? (
              <button
                type="button"
                className="player__play"
                onClick={handleClickPlay}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            ) : (
              <button
                type="button"
                className="player__play"
                onClick={handleClickPlay}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>
            )}
            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={handleFullScreen}
            >
              {" "}
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
