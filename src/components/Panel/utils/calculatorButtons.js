import BUTTON_TYPE from './buttonTypes';

const calculatorButtons = [
  { label: 'AC', type: BUTTON_TYPE.ACTION },
  { label: '+/-', type: BUTTON_TYPE.ACTION },
  { label: '%', type: BUTTON_TYPE.ACTION },
  { label: '÷', type: BUTTON_TYPE.OPERATION },

  { label: '7', type: BUTTON_TYPE.NUMBER },
  { label: '8', type: BUTTON_TYPE.NUMBER },
  { label: '9', type: BUTTON_TYPE.NUMBER },
  { label: '×', type: BUTTON_TYPE.OPERATION },

  { label: '4', type: BUTTON_TYPE.NUMBER },
  { label: '5', type: BUTTON_TYPE.NUMBER },
  { label: '6', type: BUTTON_TYPE.NUMBER },
  { label: '-', type: BUTTON_TYPE.OPERATION },

  { label: '1', type: BUTTON_TYPE.NUMBER },
  { label: '2', type: BUTTON_TYPE.NUMBER },
  { label: '3', type: BUTTON_TYPE.NUMBER },
  { label: '+', type: BUTTON_TYPE.OPERATION },

  { label: '0', type: BUTTON_TYPE.NUMBER, columns: 2 },
  { label: '.', type: BUTTON_TYPE.NUMBER },
  { label: '=', type: BUTTON_TYPE.EQUALS },
];

export default calculatorButtons;
