import React from 'react';
import { create } from 'eslint-plugin-import/lib/rules/first';
import App from './App';

describe('App', () => {
  it('should render', () => {
    // Arrange
    const component = create(<App />);
    // Act
    // Asset
    expect(component).toMatchSnapshot();
  });
});
