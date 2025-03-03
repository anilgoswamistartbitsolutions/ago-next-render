"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./SlideWithVideos.css";
import Image from "next/image";

import TouchToStart from "@/public/icons/TouchToStart.svg";
import AddParticipant from "./main-page/AddParticipant";
import toast from "react-hot-toast";
import ClickComponent from "./ClickComponent";
const SlideWithVideos = () => {
  const [selectedState, setSelectedState] = useState("first");
  return (
    <div className="slide-content">
      <FirstStep selected={selectedState} setSelected={setSelectedState} />
      <SecondStep selected={selectedState} setSelected={setSelectedState} />
      <ThirdStep selected={selectedState} setSelected={setSelectedState} />
      <FourthStep selected={selectedState} setSelected={setSelectedState} />
      <FifthStep selected={selectedState} setSelected={setSelectedState} />
    </div>
  );
};
const FirstStep = ({ selected = "none", setSelected = () => { } }) => {
  return (
    <>
      {selected == "first" && <div className="transparent-div" onClick={() => { setSelected("second") }}></div>}
      <img
        src="/backgrounds/Slide1bg.svg"
        alt="Finger"
        width={"100%"}
        height={"auto"}
        className={`center-bg  fade${selected == "first" ? "show" : ""}`}
      />
     {selected == "first" && <ClickComponent showOn="first" selected={selected} clickHandler={() => setSelected("second")} />}
      <p className={`bottom-text fade ${selected == "first" ? "show" : ""}`}>
        Discover how your heart reacts to our art.
      </p>
    </>
  );
};
const SecondStep = ({ selected = "none", setSelected = () => { } }) => {
  const videoRef = useRef(null);
  const handlePlayClick = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef?.current?.play();
      }, 1200);
    }
  };
  useEffect(() => {
    if (selected == "second" && videoRef) {
      handlePlayClick();
    } else if (selected == "first" && videoRef) {
      videoRef.current.currentTime = 0;
    }
  }, [selected]);
  useEffect(() => {
    const videoElement = videoRef.current;
    const videoEnd = () => {
      if (selected == "second") {
        setSelected("third");

      }
    };
    if (videoElement) {
      videoElement.addEventListener("ended", videoEnd);
      return () => {
        videoElement.removeEventListener("ended", videoEnd);
      };
    }
  }, [selected]);
  return (
    <video
      id="vedio1"
      muted
      className={`fade ${["second", "third", "fourth"].includes(selected) ? "show" : ""
        }`}
      ref={videoRef}
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        width: "100vw",
        height: "auto",
      }}
    >
      <source src="/videos/video3-5.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};
const ThirdStep = ({ selected = "none", setSelected = () => { } }) => {
  const [checkValue, setCheckValue] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    // if (checkValue == false) {
    //   toast.error("Please check Terms and conditions!");
    //   return;
    // }
    setCheckValue(false);
    setSelected("fourth");
  };
  return (
    <>
      <div
        className={`right-form-page px-5 py-4  fade ${"third" == selected ? "show" : ""
          }`}
      >
        <form className="add-participant-form" onSubmit={submitHandler}>
          <h2 className="main-heading">Terms and Conditions</h2>

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
    </>
  );
};

const FourthStep = ({ selected = "none", setSelected = () => { } }) => {
  return (
    <div

      className={` right-form-page px-5 py-4 fade ${"fourth" == selected ? "show" : ""
        }`}
    >
      <AddParticipant
        next={() => {
          setSelected("fifth");
        }}
        currentPage={selected}
      />
    </div>
  );
};
const FifthStep = ({ selected = "none", setSelected = () => { } }) => {
  const debounceRef = useRef(null);
  const videoRef2 = useRef(null);
  const handlePlayClick = () => {
    if (videoRef2.current) {
      setTimeout(() => {
        videoRef2?.current?.play();
      }, 1000);
    }
  };
  useEffect(() => {
    if (selected == "fifth" && videoRef2) {
      debounceRef.current = setTimeout(() => {
        setSelected("first");
      }, [12000]);
      handlePlayClick();
    } else if (selected == "third" && videoRef2) {
      videoRef2.current.currentTime = 0;
    }
  }, [selected]);

  const screenClickHandler = () => {
    if (debounceRef?.current) {
      clearTimeout(debounceRef?.current);
    }
    if (selected == "fifth") {
      setSelected("first");
    }
  };

  return (
    <>
      {selected == "fifth" && <div className="transparent-div" onClick={screenClickHandler}></div>}
      <video
        id="vedio2"
        muted
        className={`fade-last ${["fifth"].includes(selected) ? "show" : ""}`}
        ref={videoRef2}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0",
          width: "100vw",
          height: "auto",
        }}
      >
        <source src="/videos/video4-5.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default SlideWithVideos;
