import { ApiRoute } from "../../utils/const";
import { loadFilms } from "./films-actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
}
