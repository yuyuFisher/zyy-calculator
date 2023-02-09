import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonItem({ name, handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>{name}</button>
  );
}

ButtonItem.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
