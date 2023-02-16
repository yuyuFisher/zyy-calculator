import React, { useEffect, useRef, useState } from 'react';

import CalculatorUI from './components/CalculatorUI';
import PanelContainer from './components/Panel/PanelContainer';
import CalculatorHelper from './logics/calculatorHelper';

export default function Calculator() {
  const [result, setResult] = useState('0');
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
    <CalculatorUI
      result={result}
      resultsToItem={(item) => (
        <PanelContainer
          key={item.label}
          item={item}
          onClick={() => handleClick(item)}
          lastKeyDown={lastKeyDownResult}
        />
      )}
    />
  );
}
