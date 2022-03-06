import React from 'react';
import propTypes from 'prop-types';
import './ButtonLink.css';

export const ButtonLink = ({ children, onClick, disabled, ...props }) => {
  return (
    <button className='buttonLink' onClick={onClick} {...props} disabled={disabled}>
      {children}
    </button>
  );
};

ButtonLink.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};
