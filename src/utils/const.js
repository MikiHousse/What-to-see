export const AppRoute = {
  LOGIN: '/login',
  MAIN: '/',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  NOT_FOUND: '/not-found'
}

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
}

export const ApiRoute = {
  FILMS: '/films',
  FILMS_ID: '/films/',
  PROMO: '/films/promo',
  PLAYER: '/player',
  FAVORITE: '/favorite',
  REVIEW: 'review',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
};

export const LIST_COUNT_FILMS = 8;

export const MORE_LIKE_COUNT = 4;

export const ALL_GENRES = `All genres`;

export const MAX_COUNT_GENRES = 9

export const FlagFavorite = {
  TRUE: 1,
  FALSE: 0,
}

export const STARS_COUNT = 10;
