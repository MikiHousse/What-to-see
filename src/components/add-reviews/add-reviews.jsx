import React, { useCallback, useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../logo/logo";

import {
  getReviewSendingStatus,
  getSelectFilm,
} from "../../redux/films-data/films-selectors";
import { reviewIsLoading } from "../../redux/films-data/films-actions";
import {
  fetchSelectedFilm,
  sendingReview,
} from "../../redux/films-data/films-api-action";
import { ApiRoute, FetchStatus, STARS_COUNT } from "../../utils/const";

const AddReviews = () => {
  const { id } = useParams();
  const selectFilm = useSelector(getSelectFilm);
  const dispatch = useDispatch();
  const isLoading = useSelector(getReviewSendingStatus);
  const { posterImage, backgroundImage, name } = selectFilm;

  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const [commentError, setCommentError] = useState(false);
  const [starError, setStarError] = useState(false);

  const validCommentLength = comment.length >= 50 && comment.length <= 400;
  const validStar = stars >= 1 && stars <= 10;

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
  }, [dispatch, id]);

  const handleReviewStar = useCallback(
    (item) => {
      setStars(item);
    },
    [stars]
  );

  const handleCommentOnChange = useCallback((e) => {
    setComment(e.target.value);
    setCommentError(false);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validCommentLength && validStar) {
      dispatch(reviewIsLoading(FetchStatus.SENDING));
      dispatch(
        sendingReview(
          {
            rating: Number(stars),
            comment: comment,
          },
          id
        )
      );
    } else {
      if (validStar && !validCommentLength) {
        setCommentError(true);
      } else {
        setStarError(true);
      }
    }
  };

  useEffect(() => {
    if (isLoading === FetchStatus.DONE) {
      setComment("");
      setStars(0);
    }
  }, [isLoading]);

  if (isLoading === FetchStatus.FINALLY) {
    return <Redirect to={`${ApiRoute.FILMS}/${id}`} />;
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${ApiRoute.FILMS}/${id}`}
                    className="breadcrumbs__link"
                  >
                    {name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <Link to="/login"></Link>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          {starError ? (
            <p style={{ color: "red" }}>Рейтинг фильма не указан</p>
          ) : (
            ""
          )}
          {commentError ? (
            <p style={{ color: "red" }}>
              Отзыв должен состоять минимум из 50 символо и не больше 400
              символов
            </p>
          ) : (
            ""
          )}
          <form action="#" className="add-review__htmlForm">
            <div className="rating">
              <div className="rating__stars">
                {Array.from(Array(STARS_COUNT)).map((_, index) => {
                  const starRating = index + 1;
                  return (
                    <React.Fragment key={index}>
                      <input
                        className="rating__input visually-hidden
                        "
                        id={`star-${starRating}`}
                        type="radio"
                        name="rating"
                        value={stars}
                        onChange={() => {
                          handleReviewStar(starRating);
                        }}
                      />
                      <label
                        className="rating__label"
                        htmlFor={`star-${starRating}`}
                      >
                        Rating {starRating}
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
                value={comment}
                onChange={handleCommentOnChange}
                placeholder="Review text"
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  onClick={handleSubmitForm}
                  disabled={
                    !isLoading ||
                    (stars > 0 && comment.length > 0 ? false : true)
                  }
                >
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
