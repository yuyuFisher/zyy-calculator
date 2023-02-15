import './index.css';

import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import CalculatorHelper from '../../logics/calculatorHelper';
import calculatorButtons from '../../utils/calculatorButtons';
import PanelContainer from '../Panel/PanelContainer';
import ResultDisplay from '../ResultDisplay';

export default function Calculator({ defaultValue = '0' }) {
  const [result, setResult] = useState(defaultValue);
  const [lastKeyDownResult, setLastKeyDownResult] = useState();
  const helperInstanceRef = useRef();

  useEffect(() => {
    helperInstanceRef.current = new CalculatorHelper();
  }, []);

  const handleClick = (keyItem) => {
    helperInstanceRef.current.keyboardInput(keyItem);
    const { currentOperand, lastKeyDown } = helperInstanceRef.current;
    setResult(currentOperand);
    setLastKeyDownResult(lastKeyDown);
  };

  return (
    <section className="calculator">
      <ResultDisplay result={result} />
      <section className="calculator-panel" data-testid="calculator-panel">
        {calculatorButtons.map((item) => (
          <PanelContainer
            key={item.label}
            item={item}
            onClick={() => handleClick(item)}
            lastKeyDown={lastKeyDownResult}
          />
        ))}
      </section>
    </section>
  );
}

Calculator.propTypes = {
  defaultValue: PropTypes.string,
};
