import './PanelContainer.css';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import BUTTON_TYPE from '../../utils/buttonTypes';
import PanelItem from './PanelItem';

export default function PanelContainer({ item, onClick, lastKeyDown }) {
  return (
    <div
      className={classNames('calculator-panel-container', {
        'calculator-panel-container-cols2': item.columns === 2,
      })}
      key={item.label}
      data-testid={item.label}
      onClick={onClick}
    >
      <PanelItem
        item={item}
        lastKeyDown={lastKeyDown}
      />
    </div>
  );
}

PanelContainer.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.oneOf([
      BUTTON_TYPE.ACTION,
      BUTTON_TYPE.NUMBER,
      BUTTON_TYPE.OPERATION,
      BUTTON_TYPE.EQUALS,
    ]),
    columns: PropTypes.number,
  }),
  onClick: PropTypes.func,
  lastKeyDown: PropTypes.string,
};
