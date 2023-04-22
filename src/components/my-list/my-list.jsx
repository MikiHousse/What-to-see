import React from "react";
import PropTypes from "prop-types";
import { AuthInfoTypes, MovieMoreLikeTypes } from "../../prop-types/prop";
import Footer from "../footer/footer";
import UnUser from "../headers/un-user";

const MyList = ({ movieMoreLike, authInfo }) => {
  return (
    <>
      <div className="user-page">
        <UnUser />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {movieMoreLike.map((item) => {
              return (
                <article
                  key={item.id}
                  className="small-movie-card catalog__movies-card"
                >
                  <div className="small-movie-card__image">
                    <img
                      src={item.img}
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
