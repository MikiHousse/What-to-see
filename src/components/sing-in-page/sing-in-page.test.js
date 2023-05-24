import configureStore from "redux-mock-store";
import { createMemoryHistory } from 'history'
import * as redux from 'react-redux'
import SingInPage from "./sing-in-page";
import { AuthorizationStatus } from "../../utils/const";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";

const mockStore = configureStore({})
test('should render Sing In Page component correctly', () => {
  const history = createMemoryHistory()
  history.push('/login')
  jest.spyOn(redux, 'useSelector')
  jest.spyOn(redux, 'useDispatch')
  render(
      <redux.Provider store={mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}})}>
        <Router history={history}>
          <SingInPage/>
        </Router>
      </redux.Provider>
    );

    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument()
})
