"use client";
import React, { useEffect, useState } from "react";
import "./AddParticipant.css";
import InputCustom from "../inputs/InputCustom";
import SelectCustom from "../inputs/SelectCustom";
import SelectCustom2 from "../inputs/SelectCustom2";
import apiRequest from "@/utils/apiRequest";
import defaultErrorHandler from "@/utils/defaultErrorHandler";
import toast from "react-hot-toast";
import qs from "qs";
const AddParticipant = ({ next, currentPage = null }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const emailAddressValidator = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || value == "") {
      setEmailErrorMessage("Please enter a valid email address.");
      return false;
    } else if (!emailRegex.test(value)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return false;
    }
    setEmailErrorMessage(null);
    return true;
  };
  const [firstName, setFirstName] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(null);
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const firstNameValidator = (value) => {
    if (!value || value == "") {
      setFirstNameErrorMessage("Please enter a valid first name.");
      return false;
    }
    setFirstNameErrorMessage(null);
    return true;
  };

  const [lastName, setLastName] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState(null);
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const lastNameValidator = (value) => {
    if (!value || value == "") {
      setLastNameErrorMessage("Please enter a valid last name.");
      return false;
    }
    setLastNameErrorMessage(null);
    return true;
  };

  const [age, setAge] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState(null);
  const [ageIsTouched, setAgeIsTouched] = useState(false);
  const isValidInteger = value => {
    const parsed = parseInt(value, 10);
    return Number.isInteger(parsed) && parsed >= 0 && parsed.toString() === value.toString();
  };
  const ageValidator = (value) => {
    if (value == "" || value == null || value == undefined) {
      setAgeErrorMessage("Please enter a valid Age.");
      return false;
    }
    else if (!isValidInteger(value)) {
      setAgeErrorMessage("Please enter a valid Age value.");
      return false;
    }
    else if (!(Number(value) >= 1 && Number(value) <= 150)) {
      setAgeErrorMessage("Age should be range in between 1-150");
      return false;
    }
    setAgeErrorMessage(null);
    return true;
  };

  const [deviceID, setDeviceID] = useState(null);
  const [deviceIDErrorMessage, setDeviceIDErrorMessage] = useState(null);
  const [deviceIDIsTouched, setDeviceIDIsTouched] = useState(false);
  const [deviceIDOptions, setDeviceIdOptions] = useState([]);
  const deviceIDValidator = (value) => {
    if (!value || value == "") {
      setDeviceIDErrorMessage("Please select an device id!");
      return false;
    }
    setDeviceIDErrorMessage(null);
    return true;
  };

  const [questionReason, setQuestionReason] = useState("");
  const [questionReasonErrorMessage, setQuestionReasonErrorMessage] =
    useState(null);
  const [questionReasonIsTouched, setQuestionReasonIsTouched] = useState(false);
  const [questionReasonOptions, setQuestionReasonOptions] = useState([]);
  const questionReasonValidator = (value) => {
    // if (!value || value == "") {
    //   setQuestionReasonErrorMessage("Device Id cannot be empty!");
    //   return false;
    // }
    setQuestionReasonErrorMessage(null);
    return true;
  };

  const [deviceOptionsIsLoading, setDeviceOptionsIsLoading] = useState(false);
  const getdeviceOptions = async () => {
    setDeviceOptionsIsLoading(true);
    try {
      var search = qs.stringify({
        filters: {
          has_active_session: {
            $eq: false,
          },
        },
        pagination: { limit: 100 },
        sort: ['device_id:asc']
      });
      const response = await apiRequest({
        url: `/beacon-devices${search ? "?" + search : ""}`,
        method: "GET",
        hasAuth: true
      });
      if (response?.status === "success") {
        setDeviceIdOptions(
          (response?.data?.data ?? []).map((item) => {
            return {
              label: item?.attributes?.device_name,
              value: item?.attributes?.device_id,
            };
          })
        );
      } else {
        setDeviceIdOptions([]);
        defaultErrorHandler(
          response?.error,
          "Something went wrong while loading device List!"
        );
      }
    } catch (error) {
      defaultErrorHandler(
        error,
        "Something went wrong while loading device List!"
      );
    }
    setDeviceOptionsIsLoading(false);
  };
  const [reasonOptionIsLoading, setReasonOptionIsLoading] = useState(false);
  const getReasonOptions = async () => {
    setReasonOptionIsLoading(true);
    try {
      var search = qs.stringify({
        filters: {},
        pagination: { limit: 100 },
      });
      const response = await apiRequest({
        url: `/participant-reasons${search ? "?" + search : ""}`,
        method: "GET",
        hasAuth: true
      });
      if (response?.status === "success") {
        setQuestionReasonOptions(
          (response?.data?.data ?? []).map((item) => {
            return {
              label: item?.attributes?.reason,
              value: item?.id,
            };
          })
        );
      } else {
        setQuestionReasonOptions([]);
        defaultErrorHandler(
          response?.error,
          "Something went wrong while loading Reason List!"
        );
      }
    } catch (error) {
      defaultErrorHandler(
        error,
        "Something went wrong while loading Reason List!"
      );
    }
    setReasonOptionIsLoading(false);
  };
  useEffect(() => {
    if (currentPage == "fourth") {
      getdeviceOptions();
      getReasonOptions();
    }
  }, [currentPage]);

  const [mainPageError, setMainPageError] = useState(null);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const formResetHandler = () => {
    setEmailAddress("");
    setEmailErrorMessage(null);
    setEmailIsTouched(false);
    setFirstName("");
    setFirstNameErrorMessage(null);
    setFirstNameIsTouched(false);
    setLastName("");
    setLastNameErrorMessage(null);
    setLastNameIsTouched(false);
    setAge("");
    setAgeErrorMessage(null);
    setAgeIsTouched(false);
    setDeviceID(null);
    setDeviceIDErrorMessage(null);
    setDeviceIDIsTouched(false);
    setQuestionReason(null);
    setQuestionReasonErrorMessage(null);
    setQuestionReasonIsTouched(false);
    setMainPageError(null);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setMainPageError(null);
    setSubmitIsLoading(true);
    var isEmailValid = emailAddressValidator(emailAddress);
    var isFirstNameValid = firstNameValidator(firstName);
    var isLastNameVaild = lastNameValidator(lastName);
    var isAgeVaild = ageValidator(age);
    var isDeviceIdValid = deviceIDValidator(deviceID?.value);
    if (
      !isEmailValid ||
      !isFirstNameValid ||
      !isLastNameVaild ||
      !isDeviceIdValid ||
      !isAgeVaild
    ) {
      setMainPageError("Please check all validations in form before Submit");
      setSubmitIsLoading(false);
      return;
    }
    try {
      var submitBody = {
        email_address: emailAddress,
        firstname: firstName,
        lastname: lastName,
        device_id: deviceID?.value,
        reason: questionReason?.value ?? null,
        age
      };
      const response = await apiRequest({
        url: `/add-participant`,
        method: "POST",
        body: submitBody,
        hasAuth: true
      });
      if (response?.status === "success") {
        formResetHandler();
        next();
        // toast.success("Participant Added Successfully"); 
      } else {
        defaultErrorHandler(
          response?.error,
          "Something went wrong while Adding Participant!"
        );
      }
    } catch (err) {
      defaultErrorHandler(
        err,
        "Something went wrong while Adding Participant!"
      );
    }
    setSubmitIsLoading(false);
  };

  return (
    // <div className="right-form-page px-5 py-4 ">
    <form className="add-participant-form" onSubmit={submitHandler}>
      <h2 className="main-heading"> Please fill out the form to start</h2>
      <h6 className="sub-heading">The results will be sent to your email.</h6>
      <div className="row px-0 mx-0">
        <InputCustom
          placeholder={"Email Address"}
          type="email"
          divClassName="col-12 px-1 mx-0"
          id="emailaddressinput"
          aria-describedby="emailaddress"
          value={emailAddress}
          setValue={setEmailAddress}
          error={emailErrorMessage}
          setError={setEmailErrorMessage}
          hasError={emailErrorMessage || emailErrorMessage != "" ? true : false}
          validateHandler={emailAddressValidator}
          isTouched={emailIsTouched}
          setIsTouched={setEmailIsTouched}
        />
        <InputCustom
          type="text"
          divClassName="col-12 col-md-6 px-1 mx-0"
          id="firstnameinput"
          aria-describedby="firstname"
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
          error={firstNameErrorMessage}
          setError={setFirstNameErrorMessage}
          hasError={
            firstNameErrorMessage || firstNameErrorMessage != "" ? true : false
          }
          validateHandler={firstNameValidator}
          isTouched={firstNameIsTouched}
          setIsTouched={setFirstNameIsTouched}
        />
        <InputCustom
          type="text"
          divClassName="col-12 col-md-6 px-1 mx-0"
          id="lastnameinput"
          aria-describedby="lastname"
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
          error={lastNameErrorMessage}
          setError={setLastNameErrorMessage}
          hasError={
            lastNameErrorMessage || lastNameErrorMessage != "" ? true : false
          }
          validateHandler={lastNameValidator}
          isTouched={lastNameIsTouched}
          setIsTouched={setLastNameIsTouched}
        />
        <SelectCustom2
          isClearable={true}
          isLoading={deviceOptionsIsLoading}
          options={deviceIDOptions}
          divClassName="col-12 col-md-6 px-1 mx-0"
          id="deviceidinput"
          aria-describedby="deviceid"
          placeholder="Device ID"
          value={deviceID}
          setValue={setDeviceID}
          error={deviceIDErrorMessage}
          setError={setDeviceIDErrorMessage}
          hasError={
            deviceIDErrorMessage || deviceIDErrorMessage != "" ? true : false
          }
          validateHandler={deviceIDValidator}
          isTouched={deviceIDIsTouched}
          setIsTouched={setDeviceIDIsTouched}
        />
        <SelectCustom2
          isClearable={true}
          isLoading={reasonOptionIsLoading}
          options={questionReasonOptions}
          divClassName="col-12 col-md-6 px-1 mx-0"
          id="questionreasoninput"
          aria-describedby="questionreason"
          placeholder="What brings you here? (Optional)"
          value={questionReason}
          setValue={setQuestionReason}
          error={questionReasonErrorMessage}
          setError={setQuestionReasonErrorMessage}
          hasError={
            questionReasonErrorMessage || questionReasonErrorMessage != ""
              ? true
              : false
          }
          validateHandler={questionReasonValidator}
          isTouched={questionReasonIsTouched}
          setIsTouched={setQuestionReasonIsTouched}
        />
        <InputCustom
          inputMode="numeric"
          type="number"
          min="1"
          max="150"
          onPaste={(event) => {
            const pastedData = event.clipboardData.getData('text');
            if (!isValidInteger(pastedData)) {
              event.preventDefault();
            }
          }}
          onKeyPress={(event) => {
            // Allow backspace, delete, tab, and arrow keys
            if (['Backspace', 'Tab', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'Delete'].includes(event.key)) {
              return;
            }

            // Prevent input if it's not a digit
            if (!/\d/.test(event.key)) {
              event.preventDefault();
            }
          }}

          divClassName="col-12 col-md-6 px-1 mx-0"
          id="ageinput"
          aria-describedby="age"
          placeholder="Enter Age"
          value={age}
          setValue={setAge}
          error={ageErrorMessage}
          setError={setAgeErrorMessage}
          hasError={
            ageErrorMessage || ageErrorMessage != "" ? true : false
          }
          validateHandler={ageValidator}
          isTouched={ageIsTouched}
          setIsTouched={setAgeIsTouched}

        />
        <div className="form-group col-12 col-md-6 px-1 mx-0 submit-button-group">
          <button type="submit" disabled={submitIsLoading} className="btn btn-primary w-100 submit-button">
            {submitIsLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "START"
            )}
          </button>
        </div>
      </div>
    </form>
    // </div>
  );
};

export default AddParticipant;
