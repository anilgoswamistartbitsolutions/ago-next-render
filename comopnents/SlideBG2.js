import React from "react";

const SlideBG2 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  return (
    <div className="slide-content" onClick={next}>
      <img
        src="/backgrounds/image4.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "36vw",
          position: "absolute",
          top: 0,
          left: "32%",
        }}
        alt="image4"
      />
      <img
        src="/backgrounds/image5.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "70vw",
          position: "absolute",
          top: 0,
          left: "68%",
        }}
        alt="image5"
      />
    </div>
  );
};

export default SlideBG2;
