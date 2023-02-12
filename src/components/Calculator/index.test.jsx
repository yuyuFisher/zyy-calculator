import React from 'react';
import { create } from 'eslint-plugin-import/lib/rules/first';
import Calculator from './index';

describe('Calculator', () => {
  it('should render', () => {
    // Arrange
    const component = create(<Calculator />);
    // Act
    // Asset
    expect(component).toMatchSnapshot();
  });
});
