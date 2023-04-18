import { SELECT_GENRE, RESET_GENRE } from "./action-type";
import { createAction } from "@reduxjs/toolkit";

const genreChange = createAction(SELECT_GENRE, (genre) => ({
  payload: genre,
}))

const resetGenre = createAction(RESET_GENRE)




export {genreChange, resetGenre}





