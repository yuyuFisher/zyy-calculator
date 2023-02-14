import BUTTON_TYPE from '../utils/buttonTypes';
import appendNumber from './appendNumber';
import calculate from './calculate';
import toggleNumber from './toggleNumber';

const isOperation = (key) => ['+', '-', '×', '÷'].includes(key);

class CalculatorHelper {
  constructor(props = {}) {
    this.lastOperand = '';
    this.lastKeyDown = '';
    this.currentOperand = props.defaultValue || '0';
    this.helperUpdateCallback = props.updateCallback;
  }

  helperEmitUpdateCallback() {
    if (this.helperUpdateCallback instanceof Function) {
      this.helperUpdateCallback(this.currentOperand, this.lastKeyDown);
    }
  }

  clear() {
    this.currentOperand = '0';
    this.lastOperand = '';
    this.lastKeyDown = '';
  }

  doActionInput(keyItem) {
    switch (keyItem.label) {
      case 'AC':
        this.clear();
        break;
      case '+/-':
        this.currentOperand = toggleNumber(this.currentOperand);
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

    this.currentOperand = appendNumber(startNumber, keyItem.label);
  }

  doOperationInput(keyItem) {
    if (this.lastKeyDown === keyItem.label) {
      return;
    }

    let result;
    if (this.lastOperand && this.operation) {
      result = calculate(this.lastOperand, this.currentOperand, this.operation);
    } else {
      result = this.currentOperand;
    }

    this.lastOperand = result;
    this.operation = keyItem.label;
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
    switch (keyItem.type) {
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
    this.lastKeyDown = keyItem.label;
    this.helperEmitUpdateCallback();
    return this;
  }
}

export default CalculatorHelper;
