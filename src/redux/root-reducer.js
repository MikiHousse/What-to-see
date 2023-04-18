import { combineReducers } from "redux";
import {filmsData} from  './reducer';

export const NameSpace = {
  FILMS: 'FILMS'
}

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
})
