import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import SingInPage from "../sing-in-page/sing-in-page";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReviews from "../add-reviews/add-reviews";
import Player from "../player/player";
import NotFoundPage from "../not-found-page/not-fountd-page";
import {
  MovieСategoriesTypes,
  FilmTypes,
  MovieMoreLikeTypes,
  AuthInfoTypes,
  MovieReviewsTypes,
} from "../../prop-types/prop";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// в будущем вывести этот объект в отельный js файл
const AppRoute = {
  ROOT: `/`,
};

const App = ({
  movieСategories,
  rating,
  movieMoreLike,
  film,
  authInfo,
  movieReviews,
}) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={AppRoute.ROOT} exact>
            <MainPage
              movieСategories={movieСategories}
              selectedMovieCategories={movieСategories[0]}
              authInfo={authInfo}
              film={film}
            />
          </Route>
          <Route path="/login" exact>
            <SingInPage authInfo={authInfo} />
          </Route>
          <Route path="/mylist" exact>
            <MyList movieMoreLike={movieMoreLike} authInfo={authInfo} />
          </Route>
          <Route path="/films/:id" exact>
            <MoviePage
              film={film[0]}
              movieMoreLike={movieMoreLike}
              authInfo={authInfo}
              movieReviews={movieReviews}
            />
          </Route>
          <Route path="/films/:id/review" exact>
            <AddReviews rating={rating} film={film[0]} authInfo={authInfo} />
          </Route>
          <Route path="/player/:id" exact>
            <Player film={film} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  loadsFilms: state.loadsFilms,
});

App.protTypes = {
  movieСategories: PropTypes.arrayOf(MovieСategoriesTypes.isRequired),
  film: PropTypes.arrayOf(FilmTypes.isRequired),
  movieMoreLike: PropTypes.arrayOf(MovieMoreLikeTypes.isRequired),
  authInfo: PropTypes.arrayOf(AuthInfoTypes.isRequired),
  movieReviews: PropTypes.arrayOf(MovieReviewsTypes.isRequired),
};

export { App };
export default connect(mapStateToProps, null)(App);
