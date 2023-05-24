import React from "react";
import { Switch, Route, Router as BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import browserHistory from "../../browserHistory";

import MainPage from "../main-page/main-page";
import SingInPage from "../sing-in-page/sing-in-page";
import MyList from "../my-list/my-list";
import AddReviews from "../add-reviews/add-reviews";
import Player from "../player/player";
import NotFoundPage from "../not-found-page/not-found-page";
import PrivateRoute from "../private-route/private-route";
import Loading from "../loading/loading";
import FilmPage from "../film-page/film-page";

import { getDataLoadedStatus } from "../../redux/films-data/films-selectors";
import { getAuthorizationStatus } from "../../redux/user-data/user-selectors";
import { AppRoute } from "../../utils/const";

const App = () => {
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
          <MyList />
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <FilmPage />
        </Route>
        <PrivateRoute exact path={AppRoute.REVIEW}>
          <AddReviews />
        </PrivateRoute>
        <Route path={AppRoute.PLAYER} exact>
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
