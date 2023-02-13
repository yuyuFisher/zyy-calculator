import './index.css';

import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import CalculatorHelper from '../../logics/CalculatorHelper';
import calculatorButtons from '../../utils/calculatorButtons';
import PanelContainer from '../Panel/PanelContainer';
import ResultDisplay from '../ResultDisplay';

export default function Calculator({ defaultValue = '0' }) {
  const [result, setResult] = useState(defaultValue);
  const [lastKeyDown, setLastKeyDown] = useState();
  const instanceRef = useRef();

  useEffect(() => {
    const instance = new CalculatorHelper({
      defaultValue,
      updateCallback: (helperResult, helperLastKeyDown) => {
        setResult(helperResult);
        setLastKeyDown(helperLastKeyDown);
      },
    });
    instanceRef.current = instance;
  }, []);

  const handleClick = (keyItem) => {
    const instance = instanceRef.current;
    instance.keyboardInput(keyItem);
  };

  return (
    <section className="calculator">
      <ResultDisplay result={result} />
      <section className="calculator-panel" data-testid="calculator-panel">
        {calculatorButtons.map((item) => (
          <PanelContainer
            key={item.label}
            item={{
              label: item.label,
              type: item.type,
              columns: item.columns,
            }}
            onClick={() => handleClick(item)}
            lastKeyDown={lastKeyDown}
          />
        ))}
      </section>
    </section>
  );
}

Calculator.propTypes = {
  defaultValue: PropTypes.string,
};
