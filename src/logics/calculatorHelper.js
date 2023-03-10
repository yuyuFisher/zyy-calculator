import BUTTON_TYPE from '../utils/buttonTypes';
import getButtonType from '../utils/getButtonType';
import calculate from './calculate';
import numberAppend from './numberAppend';
import numberToggle from './numberToggle';

const isOperation = (key) => ['+', '-', '×', '÷'].includes(key);

class CalculatorHelper {
  constructor() {
    this.lastOperand = '';
    this.currentOperand = '0';
    this.lastKeyDown = '';
  }

  clear() {
    this.currentOperand = '0';
    this.lastOperand = '';
    this.lastKeyDown = '';
  }

  doActionInput(keyItem) {
    switch (keyItem) {
      case 'AC':
        this.clear();
        break;
      case '+/-':
        this.currentOperand = numberToggle(this.currentOperand);
        break;
      case '%':
        this.currentOperand = calculate(this.currentOperand, 100, '÷');
        break;
      default:
        break;
    }
  }

  doNumberInput(keyItem) {
    if (this.lastKeyDown === '=') {
      this.clear();
    }

    let startNumber = this.currentOperand;

    if (isOperation(this.lastKeyDown)) {
      startNumber = '';
    }

    this.currentOperand = numberAppend(startNumber, keyItem);
  }

  doOperationInput(keyItem) {
    if (this.lastKeyDown === keyItem) {
      return;
    }

    let result;
    if (this.lastOperand && this.operation) {
      result = calculate(this.lastOperand, this.currentOperand, this.operation);
    } else {
      result = this.currentOperand;
    }

    this.lastOperand = result;
    this.operation = keyItem;
    this.currentOperand = result;
  }

  doEqualsInput() {
    if (this.operation) {
      const result = calculate(
        this.lastOperand,
        this.currentOperand,
        this.operation,
      );

      this.lastOperand = '';
      this.operation = '';
      this.currentOperand = result;
    }
  }

  keyboardInput(keyItem) {
    const type = getButtonType(keyItem);
    switch (type) {
      case BUTTON_TYPE.ACTION:
        this.doActionInput(keyItem);
        break;
      case BUTTON_TYPE.NUMBER:
        this.doNumberInput(keyItem);
        break;
      case BUTTON_TYPE.OPERATION:
        this.doOperationInput(keyItem);
        break;
      case BUTTON_TYPE.EQUALS:
        this.doEqualsInput(keyItem);
        break;
      default:
        break;
    }
    this.lastKeyDown = keyItem;
    return this;
  }
}

export default CalculatorHelper;
