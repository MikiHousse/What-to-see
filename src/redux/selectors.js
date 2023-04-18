import { NameSpace } from "./root-reducer";

export const getGenre = (state) => state[NameSpace.FILMS].genre;
export const getFilms = (state) => state[NameSpace.FILMS].films;
