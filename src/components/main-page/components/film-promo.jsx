import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromoFilm } from "../../../redux/films-data/films-selectors";
import {
  toggleFavorite,
  fetchPromoFilm,
} from "../../../redux/films-data/films-api-action";
import { checkFavorite, userIsAuth } from "../../../utils/utils";
import Logo from "../../logo/logo";
import User from "../../user/user";
import Logout from "../../logout/logout";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ApiRoute } from "../../../utils/const";
import { getAuthorizationStatus } from "../../../redux/user-data/user-selectors";
import ButtonFavorite from "../../button-favorite/button-favorite";

const FilmPromo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const promoFilm = useSelector(getPromoFilm);

  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
    isFavorite,
  } = promoFilm;

  const handleFavoriteToggle = (e) => {
    e.preventDefault();

    if (!userIsAuth(authorizationStatus)) {
      return history.push(ApiRoute.LOGIN);
    }

    dispatch(toggleFavorite(id, checkFavorite(isFavorite)));
  };

  useEffect(() => {
    dispatch(fetchPromoFilm(id));
  }, [dispatch]);

  return (
    <section className="movie-card">
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
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                to={`/player/${id}`}
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <ButtonFavorite
                handleFavoriteToggle={handleFavoriteToggle}
                isFavorite={isFavorite}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FilmPromo);
