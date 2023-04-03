import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import SingInPage from "../sing-in-page/sing-in-page";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReviews from "../add-reviews/add-reviews";
import Player from "../player/player";
import NotFoundPage from "../not-found-page/not-fountd-page";
import { MovieCardTypes, MovieСategoriesTypes } from "../../prop-types/prop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// в будущем вывести этот объект в отельный js файл
const AppRoute = {
  ROOT: `/`,
};

export const App = ({ movieCards, movieСategories, rating }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={AppRoute.ROOT} exact>
            <MainPage
              movieCards={movieCards}
              movieСategories={movieСategories}
            />
          </Route>
          <Route path="/login" exact>
            <SingInPage />
          </Route>
          <Route path="/mylist" exact>
            <MyList />
          </Route>
          <Route path="/films/:id" exact>
            <MoviePage />
          </Route>
          <Route path="/films/:id/review" exact>
            <AddReviews rating={rating} />
          </Route>
          <Route path="/player/:id" exact>
            <Player />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

App.protTypes = {
  movieCards: PropTypes.arrayOf(MovieCardTypes.isRequired),
  movieСategories: PropTypes.arrayOf(MovieСategoriesTypes.isRequired),
};

export default App;
