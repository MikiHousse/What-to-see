import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../footer/footer";
import User from "../user/user";
import Loading from "../loading/loading";
import Logo from "../logo/logo";
import Logout from "../logout/logout";

import {
  getReviewStatus,
  getSelectFilm,
  getSelectFilmLoaded,
} from "../../redux/films-data/films-selectors";
import {
  toggleFavorite,
  fetchPromoFilm,
  fetchReviewsFilm,
  fetchSelectedFilm,
} from "../../redux/films-data/films-api-action";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { ApiRoute, AuthorizationStatus } from "../../utils/const";
import { checkFavorite, userIsAuth } from "../../utils/utils";
import ButtonFavorite from "../button-favorite/button-favorite";
import FilmMoreLike from "./components/film-more-like/film-more-like";
import FilmPageTabs from "./components/film-page-tabs/film-page-tabs";

const FilmPage = ({ film, movieMoreLike, movieReviews }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const selectFilm = useSelector(getSelectFilm);
  const isSelectFilmLoaded = useSelector(getSelectFilmLoaded);
  const isReviewLoaded = useSelector(getReviewStatus);

  const { name, posterImage, backgroundImage, genre, released, isFavorite } =
    selectFilm;

  const addFavor = (e) => {
    e.preventDefault();

    if (!userIsAuth(authorizationStatus)) {
      return history.push(ApiRoute.LOGIN);
    }

    dispatch(toggleFavorite(id, checkFavorite(isFavorite)));
  };

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
    dispatch(fetchReviewsFilm(id));
    dispatch(fetchPromoFilm(id));
  }, [dispatch, id]);

  if (!isSelectFilmLoaded && !isReviewLoaded) {
    return <Loading />;
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <div className="user-block">
              <div className="user-block__avatar">
                <User />
              </div>
              <Logout />
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`${ApiRoute.PLAYER}/${id}`}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <ButtonFavorite addFavor={addFavor} isFavorite={isFavorite} />
                {authorizationStatus === AuthorizationStatus.AUTH ? (
                  <Link
                    to={`${ApiRoute.FILMS}/${id}/${ApiRoute.REVIEW}`}
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                ) : (
                  ``
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <FilmPageTabs
              selectFilm={selectFilm}
              movieReviews={movieReviews}
              film={film}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmMoreLike
            movieMoreLike={movieMoreLike}
            genre={genre}
            index={id}
          />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default React.memo(FilmPage);
