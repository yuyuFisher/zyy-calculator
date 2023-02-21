import './index.css';

import PropTypes from 'prop-types';
import React from 'react';

import CALCULATE_BUTTON from '../../utils/calculatorButtons';
import getButtonType from '../../utils/getButtonType';
import PanelContainer from '../Panel/PanelContainer';
import ResultDisplay from '../ResultDisplay';

export default function CalculatorUI({ result, onClick, lastKeyDownResult }) {
  return (
    <section className="calculator">
      <ResultDisplay result={result} />
      <section className="calculator-panel" data-testid="calculator-panel">
        {CALCULATE_BUTTON.map((item) => {
          const type = getButtonType(item);
          return (
            <PanelContainer
              key={item}
              item={item}
              type={type}
              onClick={() => onClick(item)}
              lastKeyDown={lastKeyDownResult}
            />
          );
        })}
      </section>
    </section>
  );
}

CalculatorUI.propTypes = {
  result: PropTypes.string,
  onClick: PropTypes.func,
  lastKeyDownResult: PropTypes.string,
};
