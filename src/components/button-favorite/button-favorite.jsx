import React from "react";

const ButtonFavorite = ({ isFavorite, handleFavoriteToggle }) => {
  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={handleFavoriteToggle}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? (
          <use xlinkHref="#in-list"></use>
        ) : (
          <use xlinkHref="#add"></use>
        )}
      </svg>
      <span>My list</span>
    </button>
  );
};

export default ButtonFavorite;
