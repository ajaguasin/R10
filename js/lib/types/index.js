import { PropTypes } from "prop-types";

export const navigationType = PropTypes.object;

export const faveIdsType = PropTypes.arrayOf(PropTypes.string.isRequired);

export const allSessionType = PropTypes.array;

export const sessionType = PropTypes.shape({
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  startTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export const speakerType = PropTypes.shape({
  bio: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
});

export const allConductsType = PropTypes.shape({
  allConducts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  )
});
