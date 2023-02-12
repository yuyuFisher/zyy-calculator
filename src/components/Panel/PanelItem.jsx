import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BUTTON_TYPE from './utils/buttonTypes';

export default function PanelItem({ item, lastKeyDown }) {
  return (
    <div
      className={classNames('calculator-panel-item', {
        'calculator-panel-active': item.type === BUTTON_TYPE.OPERATION
            && item.label === lastKeyDown,
        'calculator-panel-action': item.type === BUTTON_TYPE.ACTION,
        'calculator-panel-number': item.type === BUTTON_TYPE.NUMBER,
        'calculator-panel-operation':
                item.type === BUTTON_TYPE.OPERATION
                || item.type === BUTTON_TYPE.EQUALS,
      })}
    >
      {item.label}
    </div>
  );
}

PanelItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.oneOf([
      BUTTON_TYPE.ACTION,
      BUTTON_TYPE.NUMBER,
      BUTTON_TYPE.OPERATION,
      BUTTON_TYPE.EQUALS,
    ]),
  }),
  lastKeyDown: PropTypes.string,
};
