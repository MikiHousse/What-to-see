import React, { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../logo/logo";

import { starArr } from "../../utils/utils";
import {
  getReviewSendingStatus,
  getSelectFilm,
} from "../../redux/films-data/films-selectors";
import { reviewIsLoading } from "../../redux/films-data/films-actions";
import {
  fetchSelectedFilm,
  sendingReview,
} from "../../redux/films-data/films-api-action";
import { ApiRoute } from "../../utils/const";

const AddReviews = ({ authInfo }) => {
  const { id } = useParams();
  const selectFilm = useSelector(getSelectFilm);
  const { posterImage, backgroundImage, name } = selectFilm;
  const [comment, setComment] = useState("");
  const [star, setStar] = useState(1);
  const [commentError, setCommentError] = useState(false);
  const [starError, setStarError] = useState(false);
  const rating = starArr();
  const dispatch = useDispatch();

  const isLoading = useSelector(getReviewSendingStatus);

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
  }, [dispatch, id]);

  const handleReviewStar = useCallback((e) => {
    setStar(e.target.value);
    setStarError(false);
  }, []);
  const handleCommentOnChange = useCallback((e) => {
    setComment(e.target.value);
    setCommentError(false);
  }, []);

  const validCommentLength = comment.length >= 50 && comment.length <= 400;
  const validStar = star >= 1 && star <= 10;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validCommentLength && validStar) {
      dispatch(reviewIsLoading(true));
      dispatch(
        sendingReview(
          {
            rating: Number(star),
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
  console.log(star);

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
                <Link to="/login">
                  {/* {authInfo.map((item) => {
                    return (
                      <img
                        key={item.id}
                        src={item.avatar_url}
                        alt="User avatar"
                        width="63"
                        height="63"
                      />
                    );
                  })} */}
                </Link>
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
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {rating.map((item) => {
                  return (
                    <React.Fragment key={item}>
                      <input
                        className="rating__input"
                        id={`star-${item + 1}`}
                        type="radio"
                        name="rating"
                        value={item}
                        onClick={handleReviewStar}
                      />
                      <label
                        className="rating__label"
                        htmlFor={`star-${item + 1}`}
                      >
                        Rating {item + 1}
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
                    isLoading || (star > 0 && comment.length > 0 ? false : true)
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
