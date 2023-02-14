import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Calculator from './index';

describe('Calculator', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const c1 = render(<Calculator />);
      expect(c1.getByTestId('calculator-result')).toHaveTextContent('0');
    });

    it('should render correctly when have props', () => {
      const c1 = render(<Calculator defaultValue="123456" />);
      expect(c1.getByTestId('calculator-result')).toHaveTextContent('123456');
    });
  });

  describe('ACTIONS', () => {
    beforeEach(() => { render(<Calculator defaultValue="50" />); });

    it('should correctly evenly divisible', () => {
      userEvent.click(screen.getByTestId('%'));
      expect(screen.getByTestId('calculator-result')).toHaveTextContent('0.5');
    });

    it('should correctly reconciliation', () => {
      userEvent.click(screen.getByTestId('+/-'));
      expect(screen.getByTestId('calculator-result')).toHaveTextContent('-50');
    });

    it('should correctly clear', async () => {
      userEvent.click(screen.getByTestId('AC'));
      expect(screen.getByTestId('calculator-result')).toHaveTextContent('0');
    });
  });

  describe('response and complex calculations', () => {
    beforeEach(() => { render(<Calculator />); });

    it('should correctly response to panel item', () => {
      userEvent.click(screen.getByTestId('7'));
      userEvent.click(screen.getByTestId('8'));
      userEvent.click(screen.getByTestId('9'));
      userEvent.click(screen.getByTestId('.'));
      userEvent.click(screen.getByTestId('0'));
      expect(screen.getByTestId('calculator-result')).toHaveTextContent('789.0');
    });

    it('should correctly perform complex calculations', () => {
      userEvent.click(screen.getByTestId('9'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('.'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('5'));
      userEvent.click(screen.getByTestId('×'));
      userEvent.click(screen.getByTestId('5'));
      userEvent.click(screen.getByTestId('+'));
      userEvent.click(screen.getByTestId('1'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('%'));
      userEvent.click(screen.getByTestId('2'));
      userEvent.click(screen.getByTestId('='));
      expect(screen.getByTestId('calculator-result')).toHaveTextContent('4500.37');
    });

    it('should correctly perform complex calculations(negative number)', () => {
      userEvent.click(screen.getByTestId('9'));
      userEvent.click(screen.getByTestId('+/-'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('.'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('5'));
      userEvent.click(screen.getByTestId('×'));
      userEvent.click(screen.getByTestId('5'));
      userEvent.click(screen.getByTestId('+'));
      userEvent.click(screen.getByTestId('1'));
      userEvent.click(screen.getByTestId('0'));
      userEvent.click(screen.getByTestId('%'));
      userEvent.click(screen.getByTestId('2'));
      userEvent.click(screen.getByTestId('='));
      expect(screen.getByTestId('calculator-result')).toHaveTextContent('-4500.13');
    });
  });
});
