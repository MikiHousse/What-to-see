import PropTypes from 'prop-types'

const MovieCardTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export {MovieCardTypes}
