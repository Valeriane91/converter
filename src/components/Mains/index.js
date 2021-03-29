import React from 'react';
import PropTypes from 'prop-types';

// boucle sur chacun des paramètre et nomme un paramètre (ingredient) je retourne du jsx
import './mains.scss';

const Mains = ({ mains }) => (
  <ul className="mains">
    {mains.map((main) => (
      <li key={main.name} className="main">
      </li>
    ))}
  </ul>
);

/** Mains.propTypes = {
  // mains: PropTypes.arrayOf(PropTypes.string).isRequired,
  mains: PropTypes.instanceOf(PropTypes.object).isRequired,
}; */
Mains.propTypes = {
  // tableau d'objets
  // ce tableau contient des objets qui ont une "forme" spéciale (des propriétés)
  mains: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Mains;

