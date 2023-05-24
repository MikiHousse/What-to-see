import MockAdapter from "axios-mock-adapter";
import { films } from "../../mocks/films";
import { ApiRoute } from "../../utils/const";
import {
  SET_FAVORITE_FILMS,
  SET_LOADED_FILMS,
  SET_LOADED_REVIEWS,
  SET_PROMO_FILM,
  SET_SELECTED_FILM,
} from "./films-action-type";
import {
  fetchFavoriteFilms,
  fetchFilmsList,
  fetchPromoFilm,
  fetchReviewsFilm,
  fetchSelectedFilm,
  sendingReview,
  toggleFavorite,
} from "./films-api-action";
import { createAPI } from "../../api";
import reviews from "../../mocks/reviews";

let api = null;

describe("Async operation", () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it("should make a correct API call to GET /films", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films;
    const expectedFakeFilms = films;

    const filmsLoader = fetchFilmsList();

    apiMock.onGet(ApiRoute.FILMS).reply(200, fakeReply);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SET_LOADED_FILMS,
        payload: expectedFakeFilms,
      });
    });
  });
  it("should make a correct API call to GET /films/:id", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films[0];
    const fakeReplyId = 1;
    const expectedFakeSelectedFilm = films[0];

    const filmsLoader = fetchSelectedFilm(fakeReplyId);

    apiMock.onGet(`${ApiRoute.FILMS}/${fakeReplyId}`).reply(200, fakeReply);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SET_SELECTED_FILM,
        payload: expectedFakeSelectedFilm,
      });
    });
  });
  it("should make a correct API call to GET /comment/:id", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = reviews;
    const fakeReplyId = 1;
    const expectedFakeReviews = reviews;

    const reviewsLoader = fetchReviewsFilm(fakeReplyId);

    apiMock.onGet(`${ApiRoute.COMMENTS}/${fakeReplyId}`).reply(200, fakeReply);

    return reviewsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SET_LOADED_REVIEWS,
        payload: expectedFakeReviews,
      });
    });
  });
  it("should make a correct API call to POST /comments/:id", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comment = [
      {
        id: 1,
        user: {
          id: 23,
          isPro: true,
          name: "Corey",
          avatarUrl: "https://6.react.pages.academy/static/avatar/5.jpg",
        },
        rating: 9,
        comment: "best movie which i`ve ever seen",
        date: "2021-05-03T15:31:34.244Z",
      },
    ];

    const fakeReply = comment;
    const fakeReplyId = 1;
    const fakeReview = {
      rating: 9,
      comment: "best movie which i`ve ever seen",
    };
    const expectedFakeComment = comment;

    const reviewsLoader = sendingReview(fakeReview, fakeReplyId);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${fakeReplyId}`, fakeReview)
      .reply(200, fakeReply);

    return reviewsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SET_LOADED_REVIEWS,
        payload: expectedFakeComment,
      });
    });
  });
  it("should make a correct API call to GET /favorite", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films;
    const expectedFakeFavoriteFilms = films;

    const filmsLoader = fetchFavoriteFilms();

    apiMock.onGet(ApiRoute.FAVORITE).reply(200, fakeReply);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SET_FAVORITE_FILMS,
        payload: expectedFakeFavoriteFilms,
      });
    });
  });
  it("should make a correct API call to POST /favorite/:id/status", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReplyFalse = { is_favorite: false, id: 1 };
    const fakeReplyTrue = {
      isFavorite: true,
      id: 1,
    };

    const fakeSelectedFilm = [
      {
        id: 1,
        name: "Moonrise Kingdom",
        poster_image: "img/moonrise-kingdom-poster.jpg",
        preview_image: "img/moonrise-kingdom.jpg",
        background_image: "img/moonrise-kingdom.jpg",
        background_color: "#E1DD8F",
        video_link: "https://some-link",
        preview_video_link:
          "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
        description:
          "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.",
        rating: 7.8,
        scores_count: 836,
        director: "Wes Andreson",
        starring: ["Jared Gilman", "Kara Hayward", "Bruce Willis"],
        run_time: 94,
        genre: "Comedy",
        released: 2012,
        is_favorite: true,
      },
    ];

    const favoriteLoader = toggleFavorite(
      fakeReplyTrue.id,
      fakeReplyTrue.isFavorite ? "1" : "0"
    );
    const selectedFilmLoader = fetchSelectedFilm(fakeReplyTrue.id);

    apiMock
      .onPost(
        `${ApiRoute.FAVORITE}/${fakeReplyTrue.id}/${
          fakeReplyTrue.isFavorite ? "1" : "0"
        }`
      )
      .reply(200, fakeReplyFalse);

    favoriteLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
    });

    apiMock
      .onGet(`${ApiRoute.FILMS}/${fakeReplyTrue.id}`)
      .reply(200, fakeSelectedFilm);

    return selectedFilmLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: SET_SELECTED_FILM,
        payload: fakeSelectedFilm,
      });
    });
  });
  it("should make a correct API call to GET /promo", () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films[1];
    const expectedFakePromoFilms = films[1];

    const filmsLoader = fetchPromoFilm();

    apiMock.onGet(ApiRoute.PROMO).reply(200, fakeReply);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SET_PROMO_FILM,
        payload: expectedFakePromoFilms,
      });
    });
  });
});
