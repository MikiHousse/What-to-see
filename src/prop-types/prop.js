import PropTypes from 'prop-types'

const FilmTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  preview_image: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  background_color: PropTypes.string.isRequired,
  video_link: PropTypes.string.isRequired,
  preview_video_link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  scores_count: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  run_time: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  is_favorite: PropTypes.bool.isRequired,
})

const MovieСategoriesTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

const MovieMoreLikeTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

const MovieReviewsTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
})

const UserTypes = PropTypes.shape({
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
})

const AuthInfoTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
})

const CommentPostTypes = PropTypes.shape({
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
})

export { MovieСategoriesTypes, MovieMoreLikeTypes, MovieReviewsTypes,FilmTypes,UserTypes,AuthInfoTypes,CommentPostTypes}
