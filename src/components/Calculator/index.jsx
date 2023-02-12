import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CalculatorHelper from '../Panel/utils/CalculatorHelper';
import calculatorButtons from '../Panel/utils/calculatorButtons';
import PanelContainer from '../Panel/PanelContainer';
import './index.css';

export default function Calculator({ defaultValue }) {
  const [result, setResult] = useState('0');
  const instanceRef = useRef();
  const [lastKeyDown, setLastKeyDown] = useState();

  const handleClick = (keyItem) => {
    const instance = instanceRef.current;
    instance.keyboardInput(keyItem);
  };

  useEffect(() => {
    const instance = new CalculatorHelper({
      defaultValue,
      updateCallback: (_result, _lastKeyDown) => {
        setResult(_result);
        setLastKeyDown(_lastKeyDown);
      },
    });
    instanceRef.current = instance;
  }, []);

  return (
    <section className="calculator">
      <input className="calculator-result" value={result} disabled />
      <section className="calculator-panel">
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
