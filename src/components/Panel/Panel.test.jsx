import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Panel from './index';

describe('render', () => {
  it('should render Panel without crashing', () => {
    const section = document.createElement('section');
    hydrateRoot(section, <Panel />);
  });
});
