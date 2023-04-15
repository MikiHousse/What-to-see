const getSelectedGenre = (state) => {
  return state.selectedGenre
}

const getGenre = (state) => {
  return state.genre
}

const getSelectedFilms = (state) => {
  return state.selectedFilms
}

const getFilms = (state) => {
  return state.storeMovies
}





export {
  getSelectedGenre, getGenre, getFilms, getSelectedFilms
}
