import { SELECT_GENRE, STORE_MOVIES } from "./action-type";

const selectGenre = (genre) => {
  return {
    type: SELECT_GENRE,
    payload: genre
  }
}

const storeOffers = (storeMovies) => {
  return {
    type: STORE_MOVIES,
    payload: storeMovies
  }
}

export {selectGenre, storeOffers}





