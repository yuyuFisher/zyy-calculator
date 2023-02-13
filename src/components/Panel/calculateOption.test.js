import CalculatorHelper from '../../logics/CalculatorHelper';
import calculatorButtons from '../../utils/calculatorButtons';

// 方便查找，把按键转成Map结构
const BUTTONS = calculatorButtons.reduce(
  (previousButtons, currentButtons) => ({
    ...previousButtons,
    [currentButtons.label]: currentButtons,
  }),
  {},
);

describe('calculateOption', () => {
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
    // Act
    insert
      .keyboardInput(BUTTONS['+'])
      .keyboardInput(BUTTONS['-'])
      .keyboardInput(BUTTONS['2'])
      .keyboardInput(BUTTONS['8'])
      .keyboardInput(BUTTONS['0'])
      .keyboardInput(BUTTONS['=']);
    // Asset
    expect(result).toEqual('207');
  });

  it('should correctly decrease', () => {
    insert
      .keyboardInput(BUTTONS['-'])
      .keyboardInput(BUTTONS['5'])
      .keyboardInput(BUTTONS['=']);
    expect(result).toEqual('118');

    insert
      .keyboardInput(BUTTONS['-'])
      .keyboardInput(BUTTONS['-'])
      .keyboardInput(BUTTONS['1'])
      .keyboardInput(BUTTONS['0'])
      .keyboardInput(BUTTONS['=']);
    expect(result).toEqual('108');
  });

  it('should correctly multiply', () => {
    insert
      .keyboardInput(BUTTONS['×'])
      .keyboardInput(BUTTONS['2'])
      .keyboardInput(BUTTONS['=']);
    expect(result).toEqual('246');

    insert
      .keyboardInput(BUTTONS['×'])
      .keyboardInput(BUTTONS['×'])
      .keyboardInput(BUTTONS['1'])
      .keyboardInput(BUTTONS['0'])
      .keyboardInput(BUTTONS['=']);
    expect(result).toEqual('2460');
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

    insert
      .keyboardInput(BUTTONS['÷'])
      .keyboardInput(BUTTONS['÷'])
      .keyboardInput(BUTTONS['4'])
      .keyboardInput(BUTTONS['=']);
    expect(result).toEqual('2.5');
  });
});
