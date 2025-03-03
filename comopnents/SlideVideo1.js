"use client";
import React, { useEffect, useRef } from "react";

const SlideVideo1 = ({
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
    if (currentPage == 1 && videoRef.current) {
      handlePlayClick();
    }
  }, [currentPage, videoRef]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const videoEnd = () => {
      if (currentPage == 1) {
        change(2);
        setTimeout(() => {
          videoElement.currentTime = 0;
        }, 3000);
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
    <div className="slide-content">
      <video
        id="vedio1"
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
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SlideVideo1;
