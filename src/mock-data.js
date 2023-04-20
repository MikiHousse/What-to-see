const countList = 8;
const all = `All genres`;

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
}

const route = {
  FILMS: '/films',
  FILMS_ID: '/films/',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
};

const User = {
  email: `Oliver.conner@gmail.com`,
  password: `12345678`
}

const AuthInfo = [
  {
    id: `1`,
    email: `Oliver.conner@gmail.com`,
    name: `Oliver.conner`,
    avatar_url: `img/avatar.jpg`
  }
]

const Film = [
  {
    id: `1`,
    name: `The Grand Budapest Hotel`,
    poster_image: `img/the-grand-budapest-hotel-poster.jpg`,
    preview_image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background_image: `img/bg-the-grand-budapest-hotel.jpg`,
    background_color: `#E0777D`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Comedy`,
    released: `2014`,
    is_favorite: false
  },
  {
    id: `2`,
    name: `Bohemian Rhapsody`,
    poster_image: `img/bohemian-rhapsody.jpg`,
    preview_image: `img/bohemian-rhapsody.jpg`,
    background_image: `img/bg-the-grand-budapest-hotel.jpg`,
    background_color: `#E1DD8F`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.`,
    rating: `7.8`,
    scores_count: `432`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Willem Dafoe`, ],
    run_time: `94`,
    genre: `Drama`,
    released: `2018`,
    is_favorite: false
  },
  {
    id: `3`,
    name: `Macbeth`,
    poster_image: `img/macbeth.jpg`,
    preview_image: `img/macbeth.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Drama`,
    released: `2015`,
    is_favorite: true
  },
  {
    id: `4`,
    name: `Aviator`,
    poster_image: `img/aviator.jpg`,
    preview_image: `img/aviator.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Drama`,
    released: `2005`,
    is_favorite: true
  },
  {
    id: `5`,
    name: `We need to talk about Kevin`,
    poster_image: `img/we-need-to-talk-about-kevin.jpg`,
    preview_image: `img/we-need-to-talk-about-kevin.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Thriller`,
    released: `2010`,
    is_favorite: false
  },
  {
    id: `6`,
    name: `What We Do in the Shadows`,
    poster_image: `img/what-we-do-in-the-shadows.jpg`,
    preview_image: `img/what-we-do-in-the-shadows.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Comedy`,
    released: `2014`,
    is_favorite: true
  },
  {
    id: `7`,
    name: `Revenant`,
    poster_image: `img/bg-the-grand-budapest-hotel.jpg`,
    preview_image: `img/revenant.jpg`,
    background_image: `img/revenant.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Comedy`,
    released: `2014`,
    is_favorite: false
  },
  {
    id: `8`,
    name: `Johnny English`,
    poster_image: `img/johnny-english.jpg`,
    preview_image: `img/johnny-english.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Comedy`,
    released: `2005`,
    is_favorite: false
  },
  {
    id: `9`,
    name: `Johnny English`,
    poster_image: `img/johnny-english.jpg`,
    preview_image: `img/johnny-english.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Crime`,
    released: `2005`,
    is_favorite: false
  },
  {
    id: `10`,
    name: `Johnny English`,
    poster_image: `img/johnny-english.jpg`,
    preview_image: `img/johnny-english.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Crime`,
    released: `2005`,
    is_favorite: false
  },
  {
    id: `11`,
    name: `Johnny English`,
    poster_image: `img/johnny-english.jpg`,
    preview_image: `img/johnny-english.jpg`,
    background_image: `img/the-grand-budapest-hotel-bg.jpg`,
    background_color: `#ffffff`,
    video_link: `video/trailer.webm`,
    preview_video_link: `../markup/video/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: `8.9`,
    scores_count: `240`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    run_time: `99`,
    genre: `Crime`,
    released: `2005`,
    is_favorite: false
  },
]

const MovieСategories = [
  {
    id: `1`,
    name: `All genres`
  },
  {
    id: `2`,
    name: `Comedies`
  },
  {
    id: `3`,
    name: `Crime`
  },
    {
    id: `4`,
    name: `Documentary`
  },
  {
    id: `5`,
    name: `Dramas`
  },
  {
    id: `6`,
    name: `Horror`
  },
  {
    id: `7`,
    name: `Kids & Family`
  },
  {
    id: `8`,
    name: `Romance`
  },
  {
    id: `9`,
    name: `Sci-Fi`
  },
    {
    id: `10`,
    name: `Thrillers`
  },
];

const MovieMoreLike = [
  {
    id: `1`,
    href: `#`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: `2`,
    href: `#`,
    img: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`
  },
  {
    id: `3`,
    href: `#`,
    img: `img/macbeth.jpg`,
    name: `Macbeth`
  },
  {
    id: `4`,
    href: `#`,
    img: `img/aviator.jpg`,
    name: `Aviator`
  },
]

const MovieReviews = [
  [{
    id: `1`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: `4`,
      name: `Kate Muir`
    },
    date: `2019-05-08T14:13:56.569Z`,
    rating: `8,9`
  },
  {
    id: `3`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: `2`,
      name: `Matt Muir`
    },
    date: `2019-05-08T14:13:56.569Z`,
    rating: `9,9`
  },
  {
    id: `5`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: `4`,
      name: `Kate Muir`
    },
    date: `2019-05-08T14:13:56.569Z`,
    rating: `8,9`
  },],
  [{
    id: `2`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: `3`,
      name: `Pitt Muir`
    },
    date: `2019-05-08T14:13:56.569Z`,
    rating: `5,9`
  },
  {
    id: `4`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: `4`,
      name: `Kate Muir`
    },
    date: `2019-05-08T14:13:56.569Z`,
    rating: `8,9`
  },
  {
    id: `6`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: `4`,
      name: `Kate Muir`
    },
    date: `2019-05-08T14:13:56.569Z`,
    rating: `8,9`
  },]
];

const CommentPost = [
  {
    rating: `8`,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
  },
]

const Rating = [
  {
    id: `1`,
    name: `Rating 1`,
    star: `star-1`,
    value: `1`,
  },
  {
    id: `2`,
    name: `Rating 2`,
    star: `star-2`,
    value: `2`
  },
  {
    id: `3`,
    name: `Rating 3`,
    star: `star-3`,
    value: `3`
  },
    {
    id: `4`,
    name: `Rating 4`,
    star: `star-4`,
    value: `4`
  },
  {
    id: `5`,
    name: `Rating 5`,
    star: `star-5`,
    value: `5`
  },
  {
    id: `6`,
    name: `Rating 6`,
    star: `star-6`,
    value: `6`
  },
  {
    id: `7`,
    name: `Rating 7`,
    star: `star-7`,
    value: `7`
  },
  {
    id: `8`,
    name: `Rating 8`,
    star: `star-8`,
    value: `8`
  },
  {
    id: `9`,
    name: `Rating 9`,
    star: `star-9`,
    value: `9`
  },
  {
    id: `10`,
    name: `Rating 10`,
    star: `star-10`,
    value: `10`
  },
]

export { MovieСategories, MovieMoreLike, MovieReviews, Rating, CommentPost, Film, AuthInfo,User, countList, all, route, AuthorizationStatus}
