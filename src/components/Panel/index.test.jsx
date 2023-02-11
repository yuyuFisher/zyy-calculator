import React from 'react';
import { create } from 'eslint-plugin-import/lib/rules/first';
import Panel from './index';

describe('Panel', () => {
  it('should render', () => {
    const component = create(<Panel />);
    expect(component).toMatchSnapshot();
  });
});
