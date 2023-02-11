import React from 'react';
import PropTypes from 'prop-types';

export default function ResultDisplay({ value }) {
  return <input type="text" value={value} />;
}

ResultDisplay.propTypes = {
  value: PropTypes.string,
};
