import CalculatorHelper from './calculatorHelper';

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
        .keyboardInput('3')
        .keyboardInput('7');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('37');
    });
  });

  describe('ACTIONS', () => {
    beforeEach(() => {
      calculatorHelper
        .keyboardInput('1')
        .keyboardInput('2')
        .keyboardInput('3');
    });

    it('should make AC button action', () => {
      calculatorHelper.keyboardInput('AC');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('0');
    });

    it('should make +/- button action', () => {
      calculatorHelper.keyboardInput('+/-');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('-123');
    });

    it('should make % action', () => {
      calculatorHelper.keyboardInput('%');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('1.23');
    });
  });

  describe('OPTIONS', () => {
    beforeEach(() => {
      calculatorHelper
        .keyboardInput('2')
        .keyboardInput('0')
        .keyboardInput('.')
        .keyboardInput('5');
    });

    it('should correctly add', () => {
      calculatorHelper
        .keyboardInput('+')
        .keyboardInput('1')
        .keyboardInput('1')
        .keyboardInput('2')
        .keyboardInput('.')
        .keyboardInput('4')
        .keyboardInput('=');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('132.9');
    });

    it('should correctly decrease', () => {
      calculatorHelper
        .keyboardInput('-')
        .keyboardInput('5')
        .keyboardInput('=');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('15.5');
    });

    it('should correctly multiply', () => {
      calculatorHelper
        .keyboardInput('×')
        .keyboardInput('3')
        .keyboardInput('=');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('61.5');
    });

    it('should correctly divide', () => {
      calculatorHelper
        .keyboardInput('÷')
        .keyboardInput('5')
        .keyboardInput('=');
      result = calculatorHelper.currentOperand;
      expect(result).toEqual('4.1');
    });
  });
});
