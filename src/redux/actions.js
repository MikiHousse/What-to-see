import { SELECT_GENRE } from "./action-type";

const selectGenry = (genre) => {
  return {
    type: SELECT_GENRE,
    payload: genre
  }
}

export {selectGenry}





