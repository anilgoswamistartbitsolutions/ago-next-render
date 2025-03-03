"use client";
import React from "react";
import "./Inputs.css";
import Select, { MultiValue } from "react-select";
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "30px",
    height: "3rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
    fontSize: "1rem",
    fontWeight: "normal",
    color: "white",
    borderColor: "rgba(255, 255, 255, 0)",
    background: "rgba(255, 255, 255, 0.12)",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    padding: "0px",
    letterSpacing: "1px"
  }),

  valueContainer: (provided) => ({
    ...provided,
    color: "white",
    letterSpacing: "1px",
    padding: "0px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
    overflow: 'hidden',
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    letterSpacing: "1px"

  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    height: "2.5rem",
    paddingTop: "0px",
    margin: "0px",
    letterSpacing: "1px"
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "4px",
    background: "black",
    borderColor: "#0e0e0e",
    letterSpacing: "1px"
  }),
  option: (provided, state) => {
    return {
      ...provided,
      backgroundColor:
        state.isSelected || state.isFocused
          ? "rgba(255, 255, 255, 0.12)"
          : "transparent",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      letterSpacing: "1px"
    };
  },
};

const SelectCustom2 = ({
  value = "",
  setValue = () => { },
  error = null,
  setError = () => { },
  hasError = false,
  isTouched = false,
  setIsTouched = () => { },
  validateHandler = () => { },
  divClassName = "",
  options = [],
  isClearable = false,
  ...rest
}) => {
  return (
    <div
      className={`form-group input-form-group react-dropdown ${hasError && error ? "input-has-error " : ""
        } ${divClassName}`}
    >
      <Select
        isSearchable={false}
        isClearable={isClearable}
        styles={customStyles}
        value={value}
        onChange={(e) => {
          setValue(e);
          if (validateHandler !== null) {
            validateHandler(e?.value);
          }
        }}
        options={options}
        // onBlur={() => {
        //   validateHandler && validateHandler(value);
        //   setIsTouched(true);
        // }}
        {...rest}
      />
      {/* <select
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
          {options.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </optgroup>
      </select>  */}
      {hasError && error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default SelectCustom2;
