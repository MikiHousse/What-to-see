import ActionType from "./actions"

const initialState = {
    genre: `All`,
    films: [],
    selectedFilm: [],
    similarFilm: [],
    favoriteFilm: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        selectedMovies: action.payload
      }
      default:
        return state
  }
}

export default reducer
