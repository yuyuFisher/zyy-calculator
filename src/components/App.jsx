import React, { useState } from 'react';
import Panel from './Panel';
import ResultDisplay from './ResultDisplay';

export default function App() {
  const [value, setValue] = useState('0');
  function handleClick() {
    setValue('点击啦');
  }

  return (
    <section>
      <ResultDisplay value={value} />
      <Panel buttonClick={handleClick} />
    </section>
  );
}
