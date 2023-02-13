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

describe('calculate', () => {
  it('should initially render', () => {
    const insert = new CalculatorHelper();
    expect(insert.currentOperand).toEqual('0');
    expect(insert.helperUpdateCallback).toEqual(undefined);
  });
  it('should input right in result box', () => {
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

    insert.clear();

    insert
      .keyboardInput(BUTTONS['2'])
      .keyboardInput(BUTTONS['+/-'])
      .keyboardInput(BUTTONS['.'])
      .keyboardInput(BUTTONS['.'])
      .keyboardInput(BUTTONS['0'])
      .keyboardInput(BUTTONS['0'])
      .keyboardInput(BUTTONS['1']);
    expect(result).toEqual('-2.001');
  });
});
