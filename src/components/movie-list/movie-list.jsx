import React from "react";
import { connect } from "react-redux";
import MovieCard from "../movie-card/movie-card";

import { storeOffers, selectGenre } from "../../redux/actions";
import { getSelectedFilms, getFilms } from "../../redux/selectors";

const MovieList = ({ items, onChange, selectedFilm }) => {
  // console.log(storeOffers(items.map((item) => item.genre)))
  console.log(selectGenre(selectedFilm));
  return (
    <div className="catalog__movies-list">
      {selectedFilm.map((card) => {
        return (
          <MovieCard
            key={card.id}
            item={card}
            onClick={() => {
              onChange(card), console.log(selectGenre());
            }}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: getFilms(state),
    selectedFilm: getSelectedFilms(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(item) {
      dispatch(storeOffers(item));
    },
  };
};

const withMovieList = connect(mapStateToProps, mapDispatchToProps);

export const OffersListWrapped = withMovieList(MovieList);

export default MovieList;
