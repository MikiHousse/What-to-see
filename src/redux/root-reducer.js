import { combineReducers } from "redux";
import {filmsData} from  './reducer';

export const NameSpace = {
  FILMS: 'FILMS',
  USER: 'USER'
}

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
  [NameSpace.USER]: filmsData
})
