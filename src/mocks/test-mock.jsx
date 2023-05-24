import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import reviews from "./reviews";

export const Test = ({ children, pushUrl }) => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const mockStore = configureStore({});
  const store = mockStore(reviews);
  const history = createMemoryHistory();
  if (pushUrl) {
    history.push(pushUrl);
  }

  store.dispatch = () => {};

  return (
    <redux.Provider store={store}>
      <Router history={history}>{children}</Router>
    </redux.Provider>
  );
};
