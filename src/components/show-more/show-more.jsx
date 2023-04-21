import React from "react";

const ShowMore = ({ showMore, filmList }) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => showMore(filmList)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
