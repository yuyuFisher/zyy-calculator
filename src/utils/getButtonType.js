import BUTTON_TYPE from './buttonTypes';

const getButtonType = (label) => {
  if (['AC', '+/-', '%'].includes(label)) {
    return BUTTON_TYPE.ACTION;
  }
  if (['+', '-', '÷', '×'].includes(label)) {
    return BUTTON_TYPE.OPERATION;
  }
  if (['='].includes(label)) {
    return BUTTON_TYPE.EQUALS;
  }
  return BUTTON_TYPE.NUMBER;
};

export default getButtonType;
