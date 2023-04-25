import React, { useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../logo/logo";
import { starArr } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  getReviewSendingStatus,
  getSelectFilm,
} from "../../redux/films-data/films-selectors";
import { reviewIsLoading } from "../../redux/films-data/films-actions";
import { sendingReview } from "../../redux/films-data/films-api-action";
import { ApiRoute } from "../../utils/const";

const AddReviews = ({ authInfo }) => {
  const { id } = useParams();
  console.log("Это айди при рехедое через кнопку add review" + "  " + id);
  const selectFilm = useSelector(getSelectFilm);
  const { posterImage, backgroundImage, name } = selectFilm;
  const [review, setReviev] = useState("");
  const [star, setStar] = useState(0);
  const rating = starArr();
  const dispatch = useDispatch();

  const isLoading = useSelector(getReviewSendingStatus);

  const handleReviewStar = useCallback((e) => {
    setStar(e.target.value);
  }, []);
  const handleCommentOnChange = useCallback((e) => {
    setReviev(e.target.value);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(reviewIsLoading(true));
    dispatch(
      sendingReview(
        {
          rating: Number(star),
          comment: review,
        },
        id
      )
    );
  };

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
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={handleSubmitForm}
          >
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
                        onClick={handleReviewStar}
                        // ref={rate}
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
                value={review}
                // ref={com}
                onChange={handleCommentOnChange}
                placeholder="Review text"
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  onClick={handleSubmitForm}
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
