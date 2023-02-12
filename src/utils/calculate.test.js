import calculatorButtons from '../components/Panel/utils/calculatorButtons';
import CalculatorHelper from '../components/Panel/utils/CalculatorHelper';

// 方便查找，把按键转成Map结构
const BUTTONS = calculatorButtons.reduce(
  (pre, cur) => ({ ...pre, [cur.label]: cur }),
  {},
);

describe('calculate', () => {
  it('should correctly add', () => {
    // Arrange
    let result;
    const insert = new CalculatorHelper({
      defaultValue: 123,
      updateCallback: (ret) => (result = ret),
    });
    // Act
    insert
      .keyboardInput(BUTTONS['+'])
      .keyboardInput(BUTTONS['5'])
      .keyboardInput(BUTTONS['=']);
    // Asset
    expect(result).toEqual('128');
    // Act
    insert
      .keyboardInput(BUTTONS['-'])
      .keyboardInput(BUTTONS['-'])
      .keyboardInput(BUTTONS['2'])
      .keyboardInput(BUTTONS['8'])
      .keyboardInput(BUTTONS['0'])
      .keyboardInput(BUTTONS['=']);
    // Asset
    expect(result).toEqual('-152');
  });
});
