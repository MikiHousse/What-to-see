import { NameSpace } from "../root-reducer";

export const getGenre = (state) => state[NameSpace.FILMS].genre;
export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getCountFilmList = (state) => state[NameSpace.FILMS].countFilmsList;
export const getDataLoadedStatus = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getSelectFilm = (state) => state[NameSpace.FILMS].selectFilm;
export const getSelectFilmLoaded = (state) => state[NameSpace.FILMS].isSelectFilmLoaded;


