import PropTypes from 'prop-types'

const MovieCardTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

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

const RatingTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
})

export {MovieCardTypes, MovieСategoriesTypes, MovieMoreLikeTypes, MovieReviewsTypes, RatingTypes}
