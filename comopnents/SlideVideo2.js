"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const SlideVideo2 = ({
  change = () => {},
  next = () => {},
  prev = () => {},
  currentPage = null,
}) => {
  const videoRef = useRef(null);
  const handlePlayClick = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef?.current?.play();
      }, 1500);
    }
  };

  useEffect(() => {
    if (currentPage == 4 && videoRef.current) {
      handlePlayClick();
    }
  }, [currentPage, videoRef]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const videoEnd = () => {
      if (currentPage == 4) {
        setTimeout(() => {
          change(0);
          videoElement.currentTime = 0;
        }, 5000);
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
    <div className="slide-content" onClick={next}>
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
      <video
        id="video2"
        muted
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
        <source src="/videos/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SlideVideo2;
