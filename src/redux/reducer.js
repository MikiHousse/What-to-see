import { SELECT_GENRE } from "./action-type";
import {MovieСategories} from '../mock-data'

const initialState = {
    selectedGenre: {
      id: `1`,
      name: `All`,
    },
    genre: MovieСategories,
}

const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return {
        ...state,
        selectedGenre: action.payload
      }
      default:
        return state
  }
}

export default reducer
