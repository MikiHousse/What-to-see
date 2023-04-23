import { ApiRoute } from "../../utils/const";
import { loadFilms, selectedFilm } from "./films-actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
}

export const fetchSelectedFilm = (id) => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS_ID + id)
    .then(({data}) => dispatch(selectedFilm(data)))
    .catch(() => {})
);
