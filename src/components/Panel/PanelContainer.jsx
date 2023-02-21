import './PanelContainer.css';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import BUTTON_TYPE from '../../utils/buttonTypes';
import PanelItem from './PanelItem';

export default function PanelContainer({
  item, type, onClick, lastKeyDown,
}) {
  return (
    <div
      className={classNames('calculator-panel-container', {
        'calculator-panel-container-cols2': item === '0',
      })}
      key={item}
      data-testid={item}
      onClick={onClick}
    >
      <PanelItem
        item={item}
        lastKeyDown={lastKeyDown}
        type={type}
      />
    </div>
  );
}

PanelContainer.propTypes = {
  item: PropTypes.string,
  type: PropTypes.oneOf([
    BUTTON_TYPE.ACTION,
    BUTTON_TYPE.NUMBER,
    BUTTON_TYPE.OPERATION,
    BUTTON_TYPE.EQUALS,
  ]),
  onClick: PropTypes.func,
  lastKeyDown: PropTypes.string,
};
