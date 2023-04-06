import React, { useCallback, useState } from "react";
import MovieCard from "../movie-card/movie-card";

const MovieList = ({ movieCards }) => {
  const [activeItem, setActiveItem] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveItem(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);
  console.log(activeItem);
  return (
    <div className="catalog__movies-list">
      {movieCards.map((card) => {
        return (
          <MovieCard
            key={card.id}
            item={card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            activeItem={activeItem}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
