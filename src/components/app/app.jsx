import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import SingInPage from "../sing-in-page/sing-in-page";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReviews from "../add-reviews/add-reviews";
import Player from "../player/player";
import NotFoundPage from "../not-found-page/not-fountd-page";
import Loading from "../spinner/Loading";
import {
  MovieСategoriesTypes,
  FilmTypes,
  MovieMoreLikeTypes,
  AuthInfoTypes,
  MovieReviewsTypes,
} from "../../prop-types/prop";
import { getDataLoadedStatus } from "../../redux/films-data/films-selectors";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { connect, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import browserHistory from "../../browserHistory";
import PrivateRoute from "../private-route/private-route";
import { AppRoute } from "../../utils/const";

const App = ({ rating, movieMoreLike, film, authInfo, movieReviews }) => {
  const isDataLoaded = useSelector(getDataLoadedStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (false === isDataLoaded) {
    return <Loading />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Router>
        <Switch>
          <Route path={AppRoute.MAIN} exact>
            <MainPage />
          </Route>
          <Route path={AppRoute.LOGIN} exact>
            <SingInPage />
          </Route>
          <PrivateRoute
            path={AppRoute.MY_LIST}
            exact
            authorizationStatus={authorizationStatus}
            render={() => (
              <MyList movieMoreLike={movieMoreLike} authInfo={authInfo} />
            )}
          ></PrivateRoute>
          <Route path={AppRoute.FILM} exact>
            <MoviePage
              film={film[0]}
              movieMoreLike={movieMoreLike}
              authInfo={authInfo}
              movieReviews={movieReviews}
            />
          </Route>
          <PrivateRoute
            path={AppRoute.REVIEW}
            exact
            authorizationStatus={authorizationStatus}
            render={() => (
              <AddReviews rating={rating} film={film[0]} authInfo={authInfo} />
            )}
          ></PrivateRoute>
          <PrivateRoute
            path={AppRoute.PLAYER}
            exact
            authorizationStatus={authorizationStatus}
            render={() => <Player film={film} />}
          ></PrivateRoute>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
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
