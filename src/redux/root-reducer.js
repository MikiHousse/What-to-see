import { combineReducers } from "redux";
import {filmsData} from  './films-data/films-data';
import { user } from "./user-data/user-data";

export const NameSpace = {
  FILMS: 'FILMS',
  USER: 'USER'
}

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
  [NameSpace.USER]: user
})
