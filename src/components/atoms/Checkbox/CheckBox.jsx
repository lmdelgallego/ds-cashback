import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import './CheckBox.css';

export const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className='checkboxContainer' {...props}>
        {children}
        <input type='checkbox' {...field} {...props} />
        <span className='checkmark'></span>
      </label>
      {meta.touched && meta.error ? <div className='checkbox-error'>{meta.error}</div> : null}
    </>
  );
};

CheckBox.propTypes = {
  children: PropTypes.string,
};

CheckBox.defaultProps = {};
