import calculatorButtons from './utils/calculatorButtons';
import CalculatorHelper from './utils/CalculatorHelper';

// 方便查找，把按键转成Map结构
const BUTTONS = calculatorButtons.reduce(
  (pre, cur) => ({ ...pre, [cur.label]: cur }),
  {},
);

describe('calculateAction', () => {
  // Arrange
  let result;
  const insert = new CalculatorHelper({
    updateCallback: (ret) => (result = ret),
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

    insert.keyboardInput(BUTTONS['+/-']);
    expect(result).toEqual('2.3');
  });

  it('should make % action', () => {
    const insertOfPercent = new CalculatorHelper({
      defaultValue: 123,
      updateCallback: (ret) => (result = ret),
    });
    insertOfPercent.keyboardInput(BUTTONS['%']);
    expect(result).toEqual('1.23');
    insertOfPercent.keyboardInput(BUTTONS['%']);
    expect(result).toEqual('0.0123');
  });
});
