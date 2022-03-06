import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import './TextInput.css';

export const TextInput = ({ label, style, clearButton = true, locale = 'en', ...props }) => {
  const [field, meta, helpers] = useField(props.name, props);

  return (
    <div className='inputText'>
      <div className='inputContainer'>
        <label>{label}</label>
        <input name={props.name} {...field} {...props} />
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
