import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import PanelItem from './PanelItem';
import BUTTON_TYPE from './utils/buttonTypes';
import './PanelContainer.css';

export default function PanelContainer({ item, onClick, lastKeyDown }) {
  return (
    <div
      className={classNames('calculator-panel-container', {
        'calculator-panel-container-cols2': item.columns === 2,
      })}
      data-type={item.type}
      data-testid={item.label}
      onClick={onClick}
    >
      <PanelItem
        item={{
          label: item.label,
          type: item.type,
          columns: item.columns,
        }}
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
