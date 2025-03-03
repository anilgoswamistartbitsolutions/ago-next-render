"use client";
import React, { useState } from "react";
import AddParticipant from "./main-page/AddParticipant";
import toast from "react-hot-toast";

const Slide2 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  const [checkValue, setCheckValue] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (checkValue == false) {
      toast.error("Please check Terms and conditions!");
      return;
    }
    setCheckValue(false);
    next();
  };
  return (
    <div className="slide-content-2">
      <div className="right-form-page px-5 py-4 ">
        <form className="add-participant-form" onSubmit={submitHandler}>
          <h2 className="main-heading">Terms and Conditions</h2>
          {/* <h6 className="sub-heading">
            The results will be sent to your email.
          </h6> */}
          <ol type="1" className="terms-and-condition-ol">
            <li>
              By providing my personal information, I am consenting to its use
              and disclosure in accordance with Art Gallery of Ontario’s Privacy
              Policy.
            </li>
            <li>
              I acknowledge that the device and lanyard will be returned to the
              AGO before exiting. I acknowledge that I will be responsible for
              lost or stolen wristbands or lanyards.
            </li>
            <li>
              All images reproduced in the Art Rate Monitor activation are
              provided free of charge for research and/or personal use only. Any
              other use, distribution or reproduction thereof is subject to
              limitations imposed by law. Any commercial exploitation of the
              images is strictly prohibited. The work of art is to be reproduced
              in its entirety without cropping or any other alteration of the
              reproduction by overprint or superimposed imagery.
            </li>
          </ol>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              value={checkValue}
              id="flexCheckChecked"
              checked={checkValue}
              onChange={(event) => {
                setCheckValue(event.target.checked);
              }}
            />
            <label
              className="form-check-label terms-check"
              htmlFor="flexCheckChecked"
            >
              Yes! Sign me up to receive the AGO’s What’s On newsletter. I
              understand that I may withdraw my consent and unsubscribe from
              receiving future communications at any time.
            </label>
          </div>
          <div className="row px-0 mx-0">
            <div className="form-group col-12 col-md-6 px-1 mx-0 submit-button-group">
              <button
                type="submit"
                className="btn btn-primary w-100 submit-button"
              >
                Agree
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Slide2;
