// react function spinner component
import React from 'react';
import './Spinner.css';
import img from '../../../assets/images/spinner.svg';

export const Spinner = () => {
  return (
    <div className='loading'>
      <div className='loading__spinner'>
        <img src={img} width={40} height={40} />
      </div>
    </div>
  );
};
