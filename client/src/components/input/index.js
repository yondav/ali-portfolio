import React from 'react';
import './input.css';

const Input = ({
  textarea,
  type,
  name,
  placeholder,
  maxLength,
  reg,
  style,
  value,
}) => {
  return (
    <>
      {!textarea ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          ref={reg}
          style={style}
          value={value}
        />
      ) : (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          ref={reg}
          style={style}
          value={value}
        />
      )}
    </>
  );
};

export default Input;
