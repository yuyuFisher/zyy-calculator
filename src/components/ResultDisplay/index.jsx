import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

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
