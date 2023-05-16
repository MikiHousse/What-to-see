import { films } from "../../mocks/films";
import reviews from "../../mocks/reviews";
import { SET_LOADED_FILMS, SET_GENRE_CHANGE, SET_RESET_GENRE, SET_SHOW_MORE_FILMS, SET_SELECTED_FILM, SET_LOADED_REVIEWS, REDIRECT_TO_ROUTE, SET_FAVORITE_FILMS, SET_PROMO_FILM } from "./films-action-type"
import { setGenreChange, setResetGenre, setLoadedFilms, setShowMoreFilms, setSelectedFilm, setLoadedReviews, redirectToRoute, setFavoriteFilms, setPromoFilm } from "./films-actions";

describe('Action', () => {
  it('action creator for genre changing, returns correct action', () => {
    const expectedAction = {
      type: SET_GENRE_CHANGE,
      payload: 'Comedy',
    };
    const genre = 'Comedy'
    expect(setGenreChange(genre)).toEqual(expectedAction)
  });
  it('action creator to reset genre, returns correct action', () => {
    const expectedAction = {
      type: SET_RESET_GENRE,
    }
    expect(setResetGenre()).toEqual(expectedAction)
  });
  it('action create for loading films list, returns correct action', () => {
    const expectedAction = {
      type: SET_LOADED_FILMS,
      payload: films,
    };
    expect(setLoadedFilms(films)).toEqual(expectedAction)
  });
  it('action create to show more films list on main-page, returns correct action', () => {
    const filmsListCount = 8;
    const expectedAction = {
      type: SET_SHOW_MORE_FILMS,
      payload: filmsListCount
    }
    expect(setShowMoreFilms(filmsListCount)).toEqual(expectedAction)
  });
  it('action create for loading selected film by user, returns correct action', () => {
    const film = films[1]
    const expectedAction = {
      type: SET_SELECTED_FILM,
      payload: film
    }
    expect(setSelectedFilm(film)).toEqual(expectedAction)
  });
  it('action creator for loading reviews for selected by user film, return correct action', () => {
    const expectedAction = {
      type: SET_LOADED_REVIEWS,
      payload: reviews
    }
    expect(setLoadedReviews(reviews)).toEqual(expectedAction)
  });
  it('action creator to redirect to other page, returns correct action', () => {
    const url = '/films'
    const expectedAction = {
      type: REDIRECT_TO_ROUTE,
      payload: url
    }
    expect(redirectToRoute(url)).toEqual(expectedAction)
  });
  it('action creator for loaded favorite films by user, return correct action', () => {
    const film = films[1]
    const expectedAction = {
      type: SET_FAVORITE_FILMS,
      payload: film
    }
    expect(setFavoriteFilms(film)).toEqual(expectedAction)
  })
  it('action creator for loaded promo film on main-page, return correct action', () => {
    const film = films[1]
    const expectedAction = {
      type: SET_PROMO_FILM,
      payload: film
    }
    expect(setPromoFilm(film)).toEqual(expectedAction)
  })
})
