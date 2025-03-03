"use client";
import React from "react";
import './Inputs.css'
const InputCustom = ({
  value = "",
  setValue = () => {},
  error = null,
  setError = () => {},
  hasError = false,
  isTouched = false,
  setIsTouched = () => {},
  validateHandler = () => {},
  divClassName = "",
  ...rest
}) => {
  return (
    <div className={`form-group input-form-group ${hasError && error ? "input-has-error":""} ${divClassName}`}>
      <input
        value={value}
        className="form-control"
        {...rest}
        onChange={(e) => {
          setValue(e.target.value);
          if (isTouched && validateHandler !== null) {
            validateHandler(e.target.value);
          }
        }}
        onBlur={(e) => {
          if (rest?.type == "text" || rest?.type == "email") {
            setValue((value ?? "").trim());
          }
          validateHandler && validateHandler(value);
          setIsTouched(true);
        }}
      />
      {hasError && error && (
        <span className="error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputCustom;
