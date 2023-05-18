import { ALL_GENRES, FetchStatus, LIST_COUNT_FILMS } from "../../utils/const"
import { SET_FAVORITE_FILMS, SET_GENRE_CHANGE, SET_LOADED_FILMS, SET_LOADED_REVIEWS, SET_PROMO_FILM, SET_RESET_GENRE, SET_REVIEW_IS_SENDING, SET_SELECTED_FILM, SET_SHOW_MORE_FILMS } from "./films-action-type"
import { filmsData } from "./films-data"
import { films } from "../../mocks/films";
import reviews from "../../mocks/reviews";
import { adapterFilms, selectAdapterFilm } from "./adapter";

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData(undefined, {}))
      .toEqual({
        genre: ALL_GENRES,
        films: [],
        isDataLoaded: false,
        filmsListCount: LIST_COUNT_FILMS,
        selectFilm: [],
        isSelectFilmLoaded: false,
        reviews: [],
        isReviewSending: FetchStatus.DONE,
        favoriteFilms: [],
        isFavoriteFilmsLoaded: false,
        promoFilm: [],
        isPromoFilmLoaded: false,
      })
  });
  it('should update genre to sort films', () => {
    const genre = 'Comedy'
    const state = {genre: 'All genres'}
    const genreChange = {
      type: SET_GENRE_CHANGE,
      payload: genre,
    };
    expect(filmsData(state, genreChange)).toEqual({genre})
  });
  it('should reset genre to All genres', () => {
    const state = {genre: 'Action'};
    const genre = 'All genres'
    const setResetGenre = {
      type: SET_RESET_GENRE,
    };
    expect(filmsData(state, setResetGenre)).toEqual({genre})
  });
  it('should update count of items in the films list', () => {
    const state = {filmsListCount: 8}
    const filmsListCount = 16;
    const showMoreFilms = {
      type: SET_SHOW_MORE_FILMS,
      payload: 8,
    }
    expect(filmsData(state, showMoreFilms)).toEqual({filmsListCount})
  });
  it('should update films by load films', () => {
    const state = {films: [], isDataLoaded: false}
    const loadedFilm = {
      type: SET_LOADED_FILMS,
      payload: films,
    }
    expect(filmsData(state, loadedFilm)).toEqual({films: adapterFilms(films), isDataLoaded: true})
  })
  it('should update selected film by load selected film', () => {
    const state = {selectFilm: [], isSelectFilmLoaded: false};
    const film = films[1];
    const loadSelectedFilm = {
      type: SET_SELECTED_FILM,
      payload: film
    }
    expect(filmsData(state, loadSelectedFilm)).toEqual({selectFilm: selectAdapterFilm(film), isSelectFilmLoaded: true})
  })
  it('without additional parameters should return initial state', () => {
    const state = {reviews: []}
    const loadReviews = {
      type: SET_LOADED_REVIEWS,
      payload: reviews
    }
    expect(filmsData(state, loadReviews)).toEqual({reviews})
  })
  it('status of sending a review of the selected film, return state', () => {
    const state = {isReviewSending: FetchStatus.DONE}
    const sendingReviews = {
      type: SET_REVIEW_IS_SENDING,
      payload: FetchStatus.DONE
    }
    expect(filmsData(state, sendingReviews)).toEqual({isReviewSending: FetchStatus.DONE})
  })
  it('should update favorite films by load favorite films, return state', () => {
    const state = {favoriteFilms: [], isFavoriteFilmsLoaded: false}
    const loadFavoriteFilms = {
      type: SET_FAVORITE_FILMS,
      payload: films,
    }
    expect(filmsData(state, loadFavoriteFilms)).toEqual({favoriteFilms: adapterFilms(films), isFavoriteFilmsLoaded: true})
  })
  it('should update promo film by load main page, return state', () => {
    const state = {promoFilm: [], isPromoFilmLoaded: false}
    const film = films[1]
    const loadPromoFilms = {
      type: SET_PROMO_FILM,
      payload: film
    }
    expect(filmsData(state, loadPromoFilms)).toEqual({promoFilm: selectAdapterFilm(film), isPromoFilmLoaded: true})
  })
})
