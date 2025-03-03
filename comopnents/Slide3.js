"use client";
import React from "react";
import AddParticipant from "./main-page/AddParticipant";

const Slide3 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  return (
    <div className="slide-content-2" >
      <AddParticipant next={next} currentPage={currentPage} />
    </div>
  );
};

export default Slide3;
