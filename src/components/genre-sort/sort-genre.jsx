import React from "react";
import { Link } from "react-router-dom";

import withGenreSort from "./hoc/with-genre-sort";

const SortGenre = ({ items, selectedItem, onClick }) => {
  return (
    <ul className="catalog__genres-list">
      {items.map((item) => {
        const active =
          item.id === selectedItem.id ? `catalog__genres-item--active` : ``;
        return (
          <li
            key={item.id}
            className={`catalog__genres-item ${active}`}
            tabIndex="0"
            onClick={() => {
              onClick(item);
              console.log(selectedItem.id);
            }}
          >
            <Link to="/" className="catalog__genres-link">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// SortGenre.defaultProps = {
//   onClick: () => undefined,
// };

const GenreListWrapped = withGenreSort(SortGenre);
export { SortGenre, GenreListWrapped };
