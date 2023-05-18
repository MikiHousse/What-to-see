import { AuthorizationStatus } from "../../utils/const"
import { SET_REQUIRE_AUTHORIZATION, SET_USER_INFO } from "./user-action-type"
import { user } from "./user-data"


describe('Reducer: user', () => {
  it('without additional parameters should return inital state', () => {
    expect(user(undefined, {})).toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN, userInfo: []})
  })
  it('should update authorization status to AUTH', () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH}
    const requireAuthorization = {
      type: SET_REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    }
    expect(user(state, requireAuthorization)).toEqual({authorizationStatus: AuthorizationStatus.AUTH})
  })
  it('should update authorization status to NO_AUTH', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH}
    const requireAuthorization = {
      type: SET_REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    }
    expect(user(state, requireAuthorization)).toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH})
  })
  it('retrieving user data', () => {
    const state = {userInfo: []}
    const loadUserInfo = {
      type: SET_USER_INFO,
      payload: []
    }
    expect(user(state, loadUserInfo)).toEqual({userInfo: []})
  })
})
