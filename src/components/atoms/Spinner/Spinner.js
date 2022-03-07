// react function spinner component
import React from 'react';
import './Spinner.css';

export const Spinner = () => {
  return (
    <div className='loading'>
      <div className='loading__spinner'>
        <img src='/images/spinner.svg' width={40} height={40} />
      </div>
    </div>
  );
};
