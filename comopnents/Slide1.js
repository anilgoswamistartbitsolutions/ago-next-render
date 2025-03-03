"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Slide1 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  const [showFirst, setShowFirst] = useState(true);
  const videoRef = useRef(null);
  const handlePlayClick = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef?.current?.play();
      }, 1200);
    }
  };
  const handleToggle = () => {
    setShowFirst(false);
    handlePlayClick();
  };
  useEffect(() => {
    const videoElement = videoRef.current;
    const videoEnd = () => {
      if (currentPage == 0) {
        change(1);
        setTimeout(() => {
          videoElement.currentTime = 0;
          setShowFirst(true);
        }, 2000);
      }
    };
    if (videoElement) {
      videoElement.addEventListener("ended", videoEnd);
      return () => {
        videoElement.removeEventListener("ended", videoEnd);
      };
    }
  }, [currentPage]);
  return (
    <div className="slide-content-1">
      <Image
        src="/icons/TouchToStart.svg"
        alt="Finger"
        width={150}
        height={150}
        onClick={handleToggle}
        className={`touch-to-start ${showFirst ? " " : "fade"}`}
      />
      <Image
        src="/backgrounds/Slide1bg.svg"
        alt="Finger"
        width={1200}
        height={449}
        className={`center-bg  fade${showFirst ? "show" : ""}`}
      />
      <video
        id="vedio1"
        muted
        className={`fade ${!showFirst ? "show" : ""}`}
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
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="bottom-text">Discover how your heart reacts to our art.</p>
    </div>
  );
};

export default Slide1;
