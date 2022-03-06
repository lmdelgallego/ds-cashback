import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import './TextInput.css';

export const TextInput = ({
  label,
  name = 'input',
  style,
  clearButton = true,
  locale = 'en',
  ...props
}) => {
  console.log('TextInput.jsx: props: ', name);
  const [field, meta, helpers] = useField(name, props);

  return (
    <div className='inputText'>
      <div className='inputContainer'>
        <label>{label}</label>
        <input name={name} {...field} {...props} />
        {clearButton && (
          <div
            className={`clearButton ${locale === 'ar' ? 'clearButtonRtl' : ''}`}
            type='button'
            hidden={!field.value}
            onClick={() => helpers.setValue('')}
          >
            <img alt='Clear' src={'/icons/cross.svg'} layout='fill' />
          </div>
        )}
        {meta.touched && meta.error ? <div className='inputError'>{meta.error}</div> : null}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  clearButton: PropTypes.bool,
  locale: PropTypes.string,
};

TextInput.defaultProps = {
  label: 'Text Input',
  style: {},
  clearButton: true,
  locale: 'en',
};
