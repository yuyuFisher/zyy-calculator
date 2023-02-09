import React from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './ButtonItem';

export default function Panel({ buttonClick }) {
  return <ButtonItem name="0" handleClick={buttonClick} />;
}

Panel.propTypes = {
  buttonClick: PropTypes.func,
};
