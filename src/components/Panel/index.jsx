import React from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './ButtonItem';

export default function Panel({ buttonClick }) {
  return (
    <div>
      <div>
        <ButtonItem name="AC" handleClick={buttonClick} />
        <ButtonItem name="+/-" handleClick={buttonClick} />
        <ButtonItem name="%" handleClick={buttonClick} />
        <ButtonItem name="/" handleClick={buttonClick} />
      </div>
      <div>
        <ButtonItem name="7" handleClick={buttonClick} />
        <ButtonItem name="8" handleClick={buttonClick} />
        <ButtonItem name="9" handleClick={buttonClick} />
        <ButtonItem name="x" handleClick={buttonClick} />
      </div>
      <div>
        <ButtonItem name="4" handleClick={buttonClick} />
        <ButtonItem name="5" handleClick={buttonClick} />
        <ButtonItem name="6" handleClick={buttonClick} />
        <ButtonItem name="-" handleClick={buttonClick} />
      </div>
      <div>
        <ButtonItem name="1" handleClick={buttonClick} />
        <ButtonItem name="2" handleClick={buttonClick} />
        <ButtonItem name="3" handleClick={buttonClick} />
        <ButtonItem name="+" handleClick={buttonClick} />
      </div>
    </div>
  );
}

Panel.propTypes = {
  buttonClick: PropTypes.func,
};
