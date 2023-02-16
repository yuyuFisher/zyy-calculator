import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

import CALCULATE_BUTTON from '../../utils/calculatorButtons';
import ResultDisplay from '../ResultDisplay';

export default function CalculatorUI({ result, resultsToItem }) {
  return (
    <section className="calculator">
      <ResultDisplay result={result} />
      <section className="calculator-panel" data-testid="calculator-panel">
        {CALCULATE_BUTTON.map(resultsToItem)}
      </section>
    </section>
  );
}

CalculatorUI.propTypes = {
  result: PropTypes.string,
  resultsToItem: PropTypes.func,
};
