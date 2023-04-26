import { REDIRECT_TO_ROUTE } from "./redux/user-data/user-action-type"
import browserHistory from "./browserHistory"

export const redirect = (_store) => (dispatch) => (action) => {
  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload)
  }
  return dispatch(action)
}
