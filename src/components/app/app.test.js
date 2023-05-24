import { createMemoryHistory } from "history";
import * as redux from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import React from "react";
import { ApiRoute, AppRoute, AuthorizationStatus } from "../../utils/const";
import { Router } from "react-router-dom";
import App from "./app";
import SingInPage from "../sing-in-page/sing-in-page";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import { films } from "../../mocks/films";
import AddReviews from "../add-reviews/add-reviews";
import Player from "../player/player";
import NotFoundPage from "../not-found-page/not-found-page";

const mockStore = configureStore({});

describe("Test routing", () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, "useDispatch");
  jest.spyOn(redux, "useSelector");
  it(`Render Main Page component when user navigate to '/' url`, async () => {
    history.push(AppRoute.MAIN);
    const store = mockStore({
      FILMS: {
        films: [],
        promoFilm: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: [],
      },
    });
    store.dispatch = () => Promise.resolve();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("All genres")).toBeInTheDocument();
    });
  });
  it(`Render 'Sing In Page component correctly when user navigate to '/login'`, () => {
    history.push(AppRoute.LOGIN);
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: [],
      },
    });
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SingInPage />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
  it(`Render MyList component correctly when user navigate to '/favorite'`, () => {
    history.push(AppRoute.MY_LIST);
    const store = mockStore({
      FILMS: {
        favoriteFilms: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: [],
      },
    });
    store.dispatch = () => Promise.resolve();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
  it(`Render Film Page component correctly when user navigate to '/films/:id'`, async () => {
    const id = 1;
    history.push(`${ApiRoute.FILMS}/${id}`);
    const film = films[0];
    const store = mockStore({
      FILMS: {
        selectFilm: film,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    store.dispatch = () => Promise.resolve();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <FilmPage />
        </Router>
      </redux.Provider>
    );
  });
  it(`Render Add Reviews component correctly when user navigate to '/rewiev/:id'`, async () => {
    const id = 1;
    history.push(`${ApiRoute.REVIEW}/${id}`);
    const store = mockStore({
      FILMS: {
        selectFilm: [],
        reviews: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    store.dispatch = () => Promise.resolve();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddReviews />
        </Router>
      </redux.Provider>
    );
  });
  it(`Render Player component correctly when user navigate to '/player/:id'`, async () => {
    const id = 1;
    history.push(`${ApiRoute.PLAYER}/${id}`);
    const store = mockStore({
      FILMS: {
        selectFilm: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    store.dispatch = () => Promise.resolve();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </redux.Provider>
    );
  });
  it(`Render Not Found Page component correctly when user navigate to '/not-found'`, async () => {
    history.push(AppRoute.NOT_FOUND);
    const store = mockStore({
      FILMS: {
        selectFilm: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    store.dispatch = () => Promise.resolve();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </redux.Provider>
    );
  });
});
