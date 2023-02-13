import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function ResultDisplay({ result }) {
  return (
    <div className="calculator-result" data-testid="calculator-result">
      {result}
    </div>
  );
}

ResultDisplay.propTypes = {
  result: PropTypes.string,
};
