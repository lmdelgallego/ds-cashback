import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

import imgIcon from './exclamation.svg';

export const Message = ({ copy, icons, ...props}) => {
  return (
        <div className='message'>
          <div className='message__icon'>
            <img alt='icon' src={icons ? icons : imgIcon} />
          </div>
          <div>{copy}</div>
        </div>
  );
};

Message.propTypes = {
  copy: PropTypes.string.isRequired,
  icons: PropTypes.string,
}