import { ApiRoute, AuthorizationStatus } from "../../utils/const";
import { SET_REQUIRE_AUTHORIZATION } from "./user-action-type";
import MockAdapter from 'axios-mock-adapter'
import { checkAuthAction } from "./user-api-action";
import { createAPI } from "../../api";

let api = null

describe('Async operation', () => {
  beforeAll(() => {
    api = createAPI(() => {})
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuthAction();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SET_REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
})
