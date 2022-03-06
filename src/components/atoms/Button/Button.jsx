import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

export const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <button className='button' onClick={onClick} {...props} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};
