import './PanelItem.css';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import BUTTON_TYPE from '../../utils/buttonTypes';

export default function PanelItem({ item, type, lastKeyDown }) {
  return (
    <div
      className={classNames('calculator-panel-item', {
        'calculator-panel-active':
          type === BUTTON_TYPE.OPERATION
          && item === lastKeyDown,
        'calculator-panel-action': type === BUTTON_TYPE.ACTION,
        'calculator-panel-number': type === BUTTON_TYPE.NUMBER,
        'calculator-panel-operation':
          type === BUTTON_TYPE.OPERATION
          && item !== lastKeyDown,
        'calculator-panel-equals': type === BUTTON_TYPE.EQUALS,
      })}
    >
      {item}
    </div>
  );
}

PanelItem.propTypes = {
  item: PropTypes.string,
  type: PropTypes.oneOf([
    BUTTON_TYPE.ACTION,
    BUTTON_TYPE.NUMBER,
    BUTTON_TYPE.OPERATION,
    BUTTON_TYPE.EQUALS,
  ]),
  lastKeyDown: PropTypes.string,
};
