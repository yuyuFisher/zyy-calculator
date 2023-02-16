import React, { useEffect, useRef, useState } from 'react';

import CalculatorUI from './components/CalculatorUI';
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
      onClick={handleClick}
      lastKeyDownResult={lastKeyDownResult}
    />
  );
}
