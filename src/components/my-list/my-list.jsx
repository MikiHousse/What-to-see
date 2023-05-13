import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../footer/footer";

import { AuthInfoTypes, MovieMoreLikeTypes } from "../../prop-types/prop";
import { getFavoriteFilms } from "../../redux/films-data/films-selectors";
import { fetchFavoriteFilms } from "../../redux/films-data/films-api-action";
import { ApiRoute } from "../../utils/const";
import User from "../user/user";
import Logo from "../logo/logo";

const MyList = () => {
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(getFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          <div className="user-block">
            <div className="user-block__avatar">
              <User />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {favoriteFilms.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${ApiRoute.FILMS}/${item.id}`}
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
                    <p
                      style={{ color: "#c9b37e" }}
                      className="small-movie-card__link"
                      href="movie-page.html"
                    >
                      {item.name}
                    </p>
                  </h3>
                </Link>
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
