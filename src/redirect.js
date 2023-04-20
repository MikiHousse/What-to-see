import { REDIRECT_TO_ROUTE } from "./redux/action-type"
import browserHistory from "./browserHistory"

export const redirect = (_store) => (next) => (action) => {
  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload)
  }
  return next(action)
}
