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

export const App = ({
  movieCards,
  movieСategories,
  rating,
  movieMoreLike,
  film,
  authInfo,
}) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={AppRoute.ROOT} exact>
            <MainPage
              movieCards={movieCards}
              movieСategories={movieСategories}
              selectedMovieCategories={movieСategories[0]}
              authInfo={authInfo}
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
              film={film}
              movieMoreLike={movieMoreLike}
              authInfo={authInfo}
            />
          </Route>
          <Route path="/films/:id/review" exact>
            <AddReviews rating={rating} film={film} authInfo={authInfo} />
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

App.protTypes = {
  movieCards: PropTypes.arrayOf(MovieCardTypes.isRequired),
  movieСategories: PropTypes.arrayOf(MovieСategoriesTypes.isRequired),
};

export default App;
