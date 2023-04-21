const AppRoute = {
  LOGIN: '/login',
  MAIN: '/',
  MY_LIST: '/mylist',
  FILM: '/films/id',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  NOT_FOUND: '/not-found'
}

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
}

const ApiRoute = {
  FILMS: '/films',
  FILMS_ID: '/films/',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
};

const LIST_COUNT_FILMS = 8;

const ALL_GENRES = `All genres`;


export {AppRoute, AuthorizationStatus, ApiRoute, ALL_GENRES, LIST_COUNT_FILMS }
