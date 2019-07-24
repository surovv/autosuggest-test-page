import React from 'react';
import PropTypes from 'prop-types';

import styles from './Suggestion.module.css';

export const typesIcons = {
  autocomplete_value: styles.musicIcon,
  city: styles.locationIcon,
  artist: styles.personIcon,
};

const Suggestion = ({ suggestion }) => (
  <div className={styles.root}>
    <div className={suggestion.type ? typesIcons[suggestion.type] : ''} />
    <div>
      {suggestion.name}
    </div>
  </div>
);

Suggestion.propTypes = {
  suggestion: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
};

export default Suggestion;
