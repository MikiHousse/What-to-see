import { NameSpace } from "../root-reducer";

export const getGenre = (state) => state[NameSpace.FILMS].genre;
export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getCountFilmList = (state) => state[NameSpace.FILMS].countFilmsList;
export const getDataLoadedStatus = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getSelectFilm = (state) => state[NameSpace.FILMS].selectFilm;
export const getSelectFilmLoaded = (state) => state[NameSpace.FILMS].isSelectFilmLoaded;
export const getReviewsFilm = (state) => state[NameSpace.FILMS].reviews;
export const getReviewStatus = (state) => state[NameSpace.FILMS].isReviewLoaded;
export const getReviewSendingStatus = (state) => state[NameSpace.FILMS].isReviewSending;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].myFavoriteFilms
export const getPromoFilm = (state) => state[NameSpace.FILMS].promoFilm;


