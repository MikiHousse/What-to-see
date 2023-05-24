import React from "react";
import { render } from "@testing-library/react";
import Player from "./player";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { AuthorizationStatus } from "../../utils/const";

const mockStore = configureStore({});
describe("Component: Player", () => {
  window.HTMLMediaElement.prototype.play = jest.fn();
  window.HTMLMediaElement.prototype.pause = jest.fn();
});
it("should render correctly", () => {
  const history = createMemoryHistory();
  history.push("/player");
  jest.spyOn(redux, "useSelector");
  jest.spyOn(redux, "useDispatch");
  const mockPath = "mock-path";
  const store = mockStore({
    FILMS: {
      selectFilm: [],
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });
  render(
    <redux.Provider store={store}>
      <Router history={history}>
        <Player isPlaying src={mockPath} onPlayButtonClick={jest.fn()} />
      </Router>
    </redux.Provider>
  );

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByTestId("audio")).toBeInTheDocument();
  // expect(screen.getByRole('button')).toHaveAttribute('disabled');
  // expect(screen.getByRole('button')).toHaveClass('track__button--pause');
});
