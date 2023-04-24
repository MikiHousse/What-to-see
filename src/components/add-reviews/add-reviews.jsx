import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import { starArr } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const AddReviews = ({ film, authInfo }) => {
  const [_, setReviev] = useState("");
  const rating = starArr();
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="/films/:id" className="breadcrumbs__link">
                    {film.name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <Link to="/login">
                  {authInfo.map((item) => {
                    return (
                      <img
                        key={item.id}
                        src={item.avatar_url}
                        alt="User avatar"
                        width="63"
                        height="63"
                      />
                    );
                  })}
                </Link>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={film.poster_image}
              alt={film.name}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {rating.map((item) => {
                  return (
                    <React.Fragment key={item}>
                      <input
                        className="rating__input"
                        id={`star-${item}`}
                        type="radio"
                        name="rating"
                        value={item}
                      />
                      <label className="rating__label" htmlFor={`star-${item}`}>
                        Rating {item}
                      </label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                onChange={(e) => setReviev(e.target.value)}
                placeholder="Review text"
              ></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddReviews;
