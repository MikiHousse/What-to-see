import React, { useEffect } from "react";
import { Switch, Route, Router as BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import MainPage from "../main-page/main-page";
import SingInPage from "../sing-in-page/sing-in-page";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReviews from "../add-reviews/add-reviews";
import Player from "../player/player";
import NotFoundPage from "../not-found-page/not-fountd-page";
import PrivateRoute from "../private-route/private-route";

import {
  MovieСategoriesTypes,
  FilmTypes,
  MovieMoreLikeTypes,
  AuthInfoTypes,
  MovieReviewsTypes,
} from "../../prop-types/prop";
import { getDataLoadedStatus } from "../../redux/films-data/films-selectors";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import browserHistory from "../../browserHistory";
import { AppRoute } from "../../utils/const";
import Loading from "../loading/loading";

const App = ({ rating, movieMoreLike, film, authInfo }) => {
  const isDataLoaded = useSelector(getDataLoadedStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (false === isDataLoaded) {
    return <Loading />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SingInPage />
        </Route>
        <PrivateRoute
          path={AppRoute.MY_LIST}
          exact
          authorizationStatus={authorizationStatus}
        >
          {" "}
          <MyList movieMoreLike={movieMoreLike} authInfo={authInfo} />
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <MoviePage
            film={film[0]}
            movieMoreLike={movieMoreLike}
            authInfo={authInfo}
          />
        </Route>
        <PrivateRoute exact path={AppRoute.REVIEW}>
          <AddReviews rating={rating} authInfo={authInfo} />
        </PrivateRoute>
        <Route path={AppRoute.PLAYER} exact>
          <Player film={film} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.protTypes = {
  movieСategories: PropTypes.arrayOf(MovieСategoriesTypes.isRequired),
  film: PropTypes.arrayOf(FilmTypes.isRequired),
  movieMoreLike: PropTypes.arrayOf(MovieMoreLikeTypes.isRequired),
  authInfo: PropTypes.arrayOf(AuthInfoTypes.isRequired),
  movieReviews: PropTypes.arrayOf(MovieReviewsTypes.isRequired),
};

export default App;
