import calculatorButtons from './utils/calculatorButtons';
import CalculatorHelper from './utils/CalculatorHelper';

// 方便查找，把按键转成Map结构
const BUTTONS = calculatorButtons.reduce(
  (pre, cur) => ({ ...pre, [cur.label]: cur }),
  {},
);

describe('calculate', () => {
  it('should initially render', () => {
    const insert = new CalculatorHelper();
    expect(insert.curOperand).toEqual('0');
    expect(insert.classUpdateCallback).toEqual(undefined);
  });
  it('should input right in result box', () => {
    let result;
    const insert = new CalculatorHelper({
      updateCallback: (ret) => (result = ret),
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
