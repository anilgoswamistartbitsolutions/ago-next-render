import React from "react";

const SlideBG4 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  return (
    <div
      className="slide-content"
      onClick={() => {
        change(0);
      }}
    >
      <img
        src="/backgrounds/image8.png"
        style={{
          height: "100vh",
          verticalAlign: "bottom",
          width: "60vw",
          position: "absolute",
          top: 0,
          left: "12%",
        }}
        alt="image8"
      />
    </div>
  );
};

export default SlideBG4;
