import { REDIRECT_TO_ROUTE, SET_LOGIN, SET_LOGOUT, SET_REQUIRE_AUTHORIZATION, SET_USER_INFO } from "./user-action-type"
import { redirectToRoute, setRequireAuthorization, setSubmitLogin, setSubmitLogout, setUserInfo } from "./user-actions";

describe('Actions: user', () => {
  it('action creator to check authorization status returns correct action', () => {
    const authorizationStatus = 'AUTH'
    const expectedAction = {
      type: SET_REQUIRE_AUTHORIZATION,
      payload: authorizationStatus
    };
    expect(setRequireAuthorization(authorizationStatus)).toEqual(expectedAction)
  })
  it('action creator to login user returns correct action', () => {
    const expectedAction = {
      type: SET_LOGIN,
      payload: {
        email: 'main@main.ru',
        password: '12345'
      }
    }
    const authData = {
      email: 'main@main.ru',
      password: '12345'
    }
    expect(setSubmitLogin(authData)).toEqual(expectedAction)
  })
  it('action creator to logout user returns correct action', () => {
    const expectedAction = {
      type: SET_LOGOUT
    }
    expect(setSubmitLogout()).toEqual(expectedAction)
  })
  it('action creator to redirect to other page, returns correct action', () => {
    const url = '/films'
    const expectedAction = {
      type: REDIRECT_TO_ROUTE,
      payload: url
    }
    expect(redirectToRoute(url)).toEqual(expectedAction)
  });
  it('action creator get data user, returns correct action', () => {
    const user = []
    const expectedAction = {
      type: SET_USER_INFO,
      payload: user
    }
    expect(setUserInfo(user)).toEqual(expectedAction)
  })
})
