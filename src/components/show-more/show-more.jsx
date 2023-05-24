import React from "react";

const ShowMore = ({ onShowMoreClick, countFilmsList }) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onShowMoreClick(countFilmsList)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
