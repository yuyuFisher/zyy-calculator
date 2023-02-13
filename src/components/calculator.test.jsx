import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Calculator from './Calculator';

describe('Calculator', () => {
  it('should render correctly', () => {
    const c1 = render(<Calculator />);
    expect(c1.getByTestId('calculator-result')).toHaveTextContent('0');
  });

  it('should render correctly when have props', () => {
    const c1 = render(<Calculator defaultValue="123456" />);
    expect(c1.getByTestId('calculator-result')).toHaveTextContent('123456');
  });

  it('should correctly response to panel item', () => {
    render(<Calculator />);
    userEvent.click(screen.getByTestId('7'));
    userEvent.click(screen.getByTestId('8'));
    userEvent.click(screen.getByTestId('9'));
    userEvent.click(screen.getByTestId('.'));
    userEvent.click(screen.getByTestId('0'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('789.0');
  });

  it('should correctly clear', () => {
    render(<Calculator defaultValue="9000" />);
    userEvent.click(screen.getByTestId('AC'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('0');
  });

  it('should correctly evenly divisible', () => {
    render(<Calculator defaultValue="12" />);
    userEvent.click(screen.getByTestId('%'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('0.12');
    userEvent.click(screen.getByTestId('%'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('0.0012');
  });

  it('should correctly reconciliation', () => {
    render(<Calculator defaultValue="12" />);
    userEvent.click(screen.getByTestId('+/-'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('-12');
    userEvent.click(screen.getByTestId('+/-'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('12');
  });

  it('should correctly perform complex calculations', () => {
    render(<Calculator />);
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
    render(<Calculator />);
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
