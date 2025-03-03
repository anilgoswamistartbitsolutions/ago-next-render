"use client";
import React from "react";
import "./Inputs.css";
const SelectCustom = ({
  value = "",
  setValue = () => {},
  error = null,
  setError = () => {},
  hasError = false,
  isTouched = false,
  setIsTouched = () => {},
  validateHandler = () => {},
  divClassName = "",
  options = [],
  ...rest
}) => {
  return (
    <div
      className={`form-group input-form-group ${
        hasError && error ? "input-has-error" : ""
      } ${divClassName}`}
    >
      <select
        value={value}
        className="form-control"
        {...rest}
        onChange={(e) => {
          setValue(e.target.value);
          if (isTouched && validateHandler !== null) {
            validateHandler(e.target.value);
          }
        }}
        onBlur={() => {
          validateHandler && validateHandler(value);
          setIsTouched(true);
        }}
      >
        <optgroup>
          {/* Map through options and create option elements */}
          {options.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </optgroup>
      </select>
      {hasError && error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default SelectCustom;
