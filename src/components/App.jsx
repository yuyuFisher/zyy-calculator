import React, { useState } from 'react';
import Panel from './Panel';
import ResultDisplay from './ResultDisplay';
import './App.css';

export default function App() {
  const [value, setValue] = useState('0');
  function handleClick() {
    setValue('点击啦');
  }

  return (
    <section className="calculator">
      <ResultDisplay result={value} />
      <Panel buttonClick={handleClick} />
    </section>
  );
}
