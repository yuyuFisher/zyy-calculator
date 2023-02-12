import calculate from '../../../utils/calculate';
import BUTTON_TYPE from './buttonTypes';
import toggleNumber from '../../../utils/toggleNumber';
import appendNumber from '../../../utils/appendNumber';

const isOperation = (key) => ['+', '-', '×', '÷'].includes(key);

class CalculatorHelper {
  curOperand;

  lastOperand = '';

  lastKeyDown = '';

  classUpdateCallback;

  classProps;

  constructor(props = {}) {
    this.curOperand = props.defaultValue || '0';
    this.classUpdateCallback = props.updateCallback;
    this.classProps = props || {};
  }

  classEmitUpdateCallback() {
    if (this.classUpdateCallback instanceof Function) {
      this.classUpdateCallback(this.curOperand, this.lastKeyDown);
    }
  }

  clear(emitUpdate = false) {
    this.curOperand = this.classProps.defaultValue || '0';
    this.lastOperand = '';
    this.lastKeyDown = '';
    if (emitUpdate) this.classEmitUpdateCallback();
  }

  doActionInput(keyItem) {
    switch (keyItem.label) {
      case 'AC':
        this.clear(false);
        break;
      case '+/-':
        this.curOperand = toggleNumber(this.curOperand);
        break;
      case '%':
        this.curOperand = calculate(this.curOperand, 100, '÷');
        break;
      default:
        break;
    }
  }

  doNumberInput(keyItem) {
    if (this.lastKeyDown === '=') {
      this.clear();
    }

    let startNumber = this.curOperand;

    if (isOperation(this.lastKeyDown)) {
      startNumber = '';
    }

    this.curOperand = appendNumber(startNumber, keyItem.label);
  }

  doOperationInput(keyItem) {
    // Repeat input
    if (this.lastKeyDown === keyItem.label) {
      return;
    }

    let result;
    if (this.lastOperand && this.operation) {
      result = calculate(this.lastOperand, this.curOperand, this.operation);
    } else {
      result = this.curOperand;
    }

    this.lastOperand = result;
    this.operation = keyItem.label;
    this.curOperand = result;
  }

  doEqualsInput() {
    if (this.operation) {
      const result = calculate(
        this.lastOperand,
        this.curOperand,
        this.operation,
      );

      this.lastOperand = '';
      this.operation = '';
      this.curOperand = result;
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
    this.classEmitUpdateCallback();
    return this;
  }
}

export default CalculatorHelper;
