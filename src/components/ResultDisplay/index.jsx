import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function ResultDisplay({ result }) {
  return <input className="calculator-result" value={result} disabled />;
}

ResultDisplay.propTypes = {
  result: PropTypes.string,
};
