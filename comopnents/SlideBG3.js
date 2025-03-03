import React from "react";

const SlideBG3 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  return (
    <div className="slide-content" onClick={next}>
      <img
        src="/backgrounds/image6.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "36vw",
          position: "absolute",
          top: 0,
          left: "38%",
        }}
        alt="image6"
      />
      <img
        src="/backgrounds/image7.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "40vw",
          position: "absolute",
          top: 0,
          left: "74%",
        }}
        alt="image7"
      />
    </div>
  );
};

export default SlideBG3;
