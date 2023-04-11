const ActionType = {
  CHANGE_GENRE: `genres/genreChange`,
}

const ActionCreator = {
  selectGenre: () => ({
    type: ActionType.CHANGE_GENRE,
    payload: 1,
  })
}

export default {ActionType, ActionCreator}
