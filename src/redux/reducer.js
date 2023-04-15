import { SELECT_GENRE, STORE_MOVIES } from "./action-type";
import {MovieСategories, Film} from '../mock-data'

const initialState = {
    selectedFilms: [],
    storeMovies: Film,
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
      };
      case STORE_MOVIES:
        const sortedData = state.storeMovies.filter((el) => el);
        // const sortedData = state.storeMovies
        return {
          ...state,
          selectedFilms: sortedData,
        }
      default:
        return state
  }
}

export default reducer
