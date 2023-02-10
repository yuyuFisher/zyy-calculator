import React, { useState } from 'react';
import ResultDisplay from './ResultDisplay';
import Panel from './Panel';

export default function App() {
  const [value, setValue] = useState('111');
  function handleClick() {
    setValue('777');
  }

  return (
    <section>
      <ResultDisplay value={value} />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Panel buttonClick={handleClick} />
    </section>
  );
}
