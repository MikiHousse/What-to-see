import { ALL_GENRES, FlagFavorite, AuthorizationStatus } from "./const";

export const filterFilmsList = (list, genre) => {
  if (genre === ALL_GENRES) {
    return list;
  }
  return list.filter((item) => item.genre === genre);
};

export const checkFavorite = (item) => (!item ? FlagFavorite.TRUE : FlagFavorite.FALSE);

export const ratingLevel = (item) => {
  if (item >= 0 && item < 3) {
    return "Bad";
  } else if (item >= 3 && item < 5) {
    return "Normal";
  } else if (item >= 5 && item < 8) {
    return "Good";
  } else if (item >= 8 && item < 10) {
    return "Very good";
  } else if (item === 10) {
    return "Awesome";
  }
};

export const timePlayer = (Time) => {
  let hours = Math.floor(Time / 60);
  let minutes = Math.floor(Time % 60);
  return `${hours}h ${minutes}m`;
};

export const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", {
    month: "long",
  });
};

export const dateConvector = (data) => {
  const date = new Date(data),
    mnth = ("0" + (date.getMonth() - 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return `${getMonthName(mnth)} ${day}, ${date.getFullYear()}`;
};

export const toggleFullScreen = () => {
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

export const formatTime = (time) => {
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

export const userIsAuth = (auth) => auth === AuthorizationStatus.AUTH;
