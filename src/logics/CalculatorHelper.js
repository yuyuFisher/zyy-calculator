import appendNumber from '../utils/appendNumber';
import BUTTON_TYPE from '../utils/buttonTypes';
import calculate from '../utils/calculate';
import toggleNumber from '../utils/toggleNumber';

const isOperation = (key) => ['+', '-', '×', '÷'].includes(key);

class CalculatorHelper {
  currentOperand;

  lastOperand = '';

  lastKeyDown = '';

  helperUpdateCallback;

  helperProps;

  constructor(props = {}) {
    this.currentOperand = props.defaultValue || '0';
    this.helperUpdateCallback = props.updateCallback;
    this.helperProps = props || {};
  }

  helperEmitUpdateCallback() {
    if (this.helperUpdateCallback instanceof Function) {
      this.helperUpdateCallback(this.currentOperand, this.lastKeyDown);
    }
  }

  clear(emitUpdate = false) {
    this.currentOperand = this.helperProps.defaultValue || '0';
    this.lastOperand = '';
    this.lastKeyDown = '';
    if (emitUpdate) this.helperEmitUpdateCallback();
  }

  doActionInput(keyItem) {
    switch (keyItem.label) {
      case 'AC':
        this.clear(false);
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
    // Repeat input
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