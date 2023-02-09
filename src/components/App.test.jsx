import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

describe('render', () => {
  it('should render App without crashing', () => {
    const section = document.createElement('section');
    hydrateRoot(section, <App />);
  });
});
