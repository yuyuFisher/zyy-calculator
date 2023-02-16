import CALCULATE_BUTTON from '../utils/calculatorButtons';
import CalculatorHelper from './calculatorHelper';

// 方便查找，把按键转成Map结构
const BUTTONS = CALCULATE_BUTTON.reduce(
  (previousButtons, currentButtons) => ({
    ...previousButtons,
    [currentButtons.label]: currentButtons,
  }),
  {},
);

describe('calculateHelper', () => {
  // Arrange
  let result;
  let insert;
  beforeEach(() => {
    insert = new CalculatorHelper();
  });

  describe('render and input', () => {
    it('should help initially render', () => {
      expect(insert.currentOperand).toEqual('0');
    });

    it('should help input right in result box', () => {
      insert
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['7']);
      result = insert.currentOperand;
      expect(result).toEqual('37');
    });
  });

  describe('ACTIONS', () => {
    beforeEach(() => {
      insert
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['3']);
    });

    it('should make AC button action', () => {
      insert.keyboardInput(BUTTONS.AC);
      result = insert.currentOperand;
      expect(result).toEqual('0');
    });

    it('should make +/- button action', () => {
      insert.keyboardInput(BUTTONS['+/-']);
      result = insert.currentOperand;
      expect(result).toEqual('-123');
    });

    it('should make % action', () => {
      insert.keyboardInput(BUTTONS['%']);
      result = insert.currentOperand;
      expect(result).toEqual('1.23');
    });
  });

  describe('OPTIONS', () => {
    beforeEach(() => {
      insert
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['0'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['5']);
    });

    it('should correctly add', () => {
      insert
        .keyboardInput(BUTTONS['+'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['4'])
        .keyboardInput(BUTTONS['=']);
      result = insert.currentOperand;
      expect(result).toEqual('132.9');
    });

    it('should correctly decrease', () => {
      insert
        .keyboardInput(BUTTONS['-'])
        .keyboardInput(BUTTONS['5'])
        .keyboardInput(BUTTONS['=']);
      result = insert.currentOperand;
      expect(result).toEqual('15.5');
    });

    it('should correctly multiply', () => {
      insert
        .keyboardInput(BUTTONS['×'])
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['=']);
      result = insert.currentOperand;
      expect(result).toEqual('61.5');
    });

    it('should correctly divide', () => {
      insert
        .keyboardInput(BUTTONS['÷'])
        .keyboardInput(BUTTONS['5'])
        .keyboardInput(BUTTONS['=']);
      result = insert.currentOperand;
      expect(result).toEqual('4.1');
    });
  });
});
