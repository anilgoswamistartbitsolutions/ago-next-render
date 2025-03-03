import React from "react";

const SlideBG1 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  return (
    <div className="slide-content " onClick={next}>
      <img
        src="/backgrounds/image1.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "38vw",
          position: "absolute",
          top: 0,
          left: "12%",
        }}
        alt="image1"
      />

      <img
        src="/backgrounds/image2.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "46vw",
          position: "absolute",
          top: 0,
          left: "50%",
        }}
        alt="image2"
      />

      <img
        src="/backgrounds/image3.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "36vw",
          position: "absolute",
          top: 0,
          left: "96%",
        }}
        alt="image3"
      />
    </div>
  );
};

export default SlideBG1;
