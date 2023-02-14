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
  describe('render and input', () => {
    it('should help initially render', () => {
      const insert = new CalculatorHelper();
      expect(insert.helperUpdateCallback).toEqual(undefined);
    });

    it('should help initially render', () => {
      const insert = new CalculatorHelper();
      expect(insert.currentOperand).toEqual('0');
    });

    it('should help input right in result box', () => {
      let result;
      const insert = new CalculatorHelper({
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
    // Arrange
    let result;
    const insert = new CalculatorHelper({
      updateCallback: (helperResult) => (result = helperResult),
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
    // Arrange
    let result;
    const insert = new CalculatorHelper({
      defaultValue: 123,
      updateCallback: (helperResult) => (result = helperResult),
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
      expect(result).toEqual('238.5');
    });

    it('should correctly multiply', () => {
      insert
        .keyboardInput(BUTTONS['×'])
        .keyboardInput(BUTTONS['2'])
        .keyboardInput(BUTTONS['=']);
      expect(result).toEqual('477');
    });

    it('should correctly divide', () => {
      insert
        .keyboardInput(BUTTONS['÷'])
        .keyboardInput(BUTTONS['4'])
        .keyboardInput(BUTTONS['7'])
        .keyboardInput(BUTTONS['.'])
        .keyboardInput(BUTTONS['7'])
        .keyboardInput(BUTTONS['=']);
      expect(result).toEqual('10');
    });
  });
});
