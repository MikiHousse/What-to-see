import { route } from "../mock-data";
import { loadFilms } from "./actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(route.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
}
