import { SELECT_GENRE } from "./action-type";

const selectGenre = (genre) => {
  return {
    type: SELECT_GENRE,
    payload: genre
  }
}

export {selectGenre}





