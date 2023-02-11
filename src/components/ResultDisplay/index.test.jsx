import React from 'react';
import { create } from 'eslint-plugin-import/lib/rules/first';
import ResultDisplay from './index';

describe('ResulDisplay', () => {
  it('should render', () => {
    const component = create(<ResultDisplay />);
    expect(component).toMatchSnapshot();
  });
});
