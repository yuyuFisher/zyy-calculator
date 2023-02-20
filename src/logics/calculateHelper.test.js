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
  let calculatorHelper;
  beforeEach(() => {
    calculatorHelper = new CalculatorHelper();
  });

  describe('render and input', () => {
    it('should help initially render', () => {
      expect(calculatorHelper.currentOperand).toEqual('0');
    });

    it('should help input right in result box', () => {
      calculatorHelper
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['7']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('37');
    });
  });

  describe('ACTIONS', () => {
    beforeEach(() => {
      calculatorHelper
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['3']);
    });

    it('should make AC button action', () => {
      calculatorHelper.keyboardInput(BUTTONS.AC);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('0');
    });

    it('should make +/- button action', () => {
      calculatorHelper.keyboardInput(BUTTONS['+/-']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('-123');
    });

    it('should make % action', () => {
      calculatorHelper.keyboardInput(BUTTONS['%']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('1.23');
    });
  });

  describe('OPTIONS', () => {
    beforeEach(() => {
      calculatorHelper
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['0'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['5']);
    });

    it('should correctly add', () => {
      calculatorHelper
        .keyboardInput(BUTTONS['+'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['4'])
        .keyboardInput(BUTTONS['=']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('132.9');
    });

    it('should correctly decrease', () => {
      calculatorHelper
        .keyboardInput(BUTTONS['-'])
        .keyboardInput(BUTTONS['5'])
        .keyboardInput(BUTTONS['=']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('15.5');
    });

    it('should correctly multiply', () => {
      calculatorHelper
        .keyboardInput(BUTTONS['×'])
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['=']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('61.5');
    });

    it('should correctly divide', () => {
      calculatorHelper
        .keyboardInput(BUTTONS['÷'])
        .keyboardInput(BUTTONS['5'])
        .keyboardInput(BUTTONS['=']);
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('4.1');
    });
  });
});
