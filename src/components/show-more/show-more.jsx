import React from "react";

const ShowMore = ({ onShowMoreClick, countMoviesList }) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onShowMoreClick(countMoviesList)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
