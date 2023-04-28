import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { AuthInfoTypes, MovieMoreLikeTypes } from "../../prop-types/prop";
import Footer from "../footer/footer";
import User from "../headers/user";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteFilms } from "../../redux/films-data/films-selectors";
import { fetchFavoriteFilms } from "../../redux/films-data/films-api-action";

const MyList = () => {
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(getFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <>
      <div className="user-page">
        <User />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {favoriteFilms.map((item) => {
              return (
                <article
                  key={item.id}
                  className="small-movie-card catalog__movies-card"
                >
                  <div className="small-movie-card__image">
                    <img
                      src={item.previewImage}
                      alt={item.name}
                      width="280"
                      height="175"
                    />
                  </div>
                  <h3 className="small-movie-card__title">
                    <a
                      className="small-movie-card__link"
                      href="movie-page.html"
                    >
                      {item.name}
                    </a>
                  </h3>
                </article>
              );
            })}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

MyList.protTypes = {
  movieMoreLike: PropTypes.arrayOf(MovieMoreLikeTypes.isRequired),
  authInfo: PropTypes.arrayOf(AuthInfoTypes.isRequired),
};

export default MyList;
