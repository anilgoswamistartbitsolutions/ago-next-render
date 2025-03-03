"use client";
import Image from "next/image";
import React, { use, useEffect, useRef } from "react";

const Slide4 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  const debounceRef = useRef(null);
  useEffect(() => {
    if (currentPage == 3) {
      debounceRef.current = setTimeout(() => {
        change(0);
      }, [8000]);
    }
  }, [currentPage]);
  return (
    <div
      className="slide-content-3"
      onClick={() => {
        if (debounceRef?.current) {
          clearTimeout(debounceRef?.current);
        }
        change(0);
      }}
    >
      <Image
        src="/icons/TouchToRestart.svg"
        alt="Finger"
        width={150}
        height={150}
        onClick={next}
        className="touch-to-restart"
      />
      <Image
        src="/icons/Finger.svg"
        alt="Finger"
        width={50}
        height={50}
        onClick={next}
        className="touch-to-restart-2"
      />
    </div>
  );
};

export default Slide4;
