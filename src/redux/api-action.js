import { route } from "../mock-data";

export const listFilms = () => (dispatch, _getState, api) => {
  api.get(route.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
}
