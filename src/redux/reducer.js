import { SELECT_GENRE } from "./action-type";

const initialState = {
    genre: `All`,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return {
        ...state,
        selectedMovie: action.payload
      }
      default:
        return state
  }
}

export default reducer
