import calculatorButtons from '../utils/calculatorButtons';
import CalculatorHelper from './calculatorHelper';

// 方便查找，把按键转成Map结构
const BUTTONS = calculatorButtons.reduce(
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
  describe('render and input', () => {
    beforeEach(() => { insert = new CalculatorHelper(); });

    it('should help initially render', () => {
      expect(insert.helperUpdateCallback).toEqual(undefined);
    });

    it('should help initially render', () => {
      expect(insert.currentOperand).toEqual('0');
    });

    it('should help input right in result box', () => {
      insert = new CalculatorHelper({
        updateCallback: (helperResult) => (result = helperResult),
      });

      insert
        .keyboardInput(BUTTONS['7'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['0']);
      expect(result).toEqual('71.30');
    });
  });

  describe('ACTIONS', () => {
    beforeEach(() => {
      insert = new CalculatorHelper({
        updateCallback: (helperResult) => (result = helperResult),
      });
    });

    it('should make AC button action', () => {
      insert
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS.AC);
      expect(result).toEqual('0');
    });

    it('should make +/- button action', () => {
      insert
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['+/-']);
      expect(result).toEqual('-2.3');
    });

    it('should make % action', () => {
      const insertOfPercent = new CalculatorHelper({
        defaultValue: 123,
        updateCallback: (helperResult) => (result = helperResult),
      });
      insertOfPercent.keyboardInput(BUTTONS['%']);
      expect(result).toEqual('1.23');
    });
  });

  describe('OPTIONS', () => {
    beforeEach(() => {
      insert = new CalculatorHelper({
        defaultValue: 123,
        updateCallback: (helperResult) => (result = helperResult),
      });
    });

    it('should correctly add', () => {
      // Act
      insert
        .keyboardInput(BUTTONS['+'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['0'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['5'])
        .keyboardInput(BUTTONS['=']);
      // Asset
      expect(result).toEqual('243.5');
    });

    it('should correctly decrease', () => {
      insert
        .keyboardInput(BUTTONS['-'])
        .keyboardInput(BUTTONS['5'])
        .keyboardInput(BUTTONS['=']);
      expect(result).toEqual('118');
    });

    it('should correctly multiply', () => {
      insert
        .keyboardInput(BUTTONS['×'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['=']);
      expect(result).toEqual('246');
    });

    it('should correctly divide', () => {
      insert
        .keyboardInput(BUTTONS['÷'])
        .keyboardInput(BUTTONS['1'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['3'])
        .keyboardInput(BUTTONS['=']);
      expect(result).toEqual('10');
    });
  });
});
