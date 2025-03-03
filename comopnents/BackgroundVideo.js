"use client";
import React, { useEffect, useRef } from "react";
import "./BackgroundVideo.css";
const BackgroundVideo = ({ videoStatus = "pause", videoLink = "" }) => {
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  useEffect(() => {
    switch (videoStatus) {
      case "pause":
        handlePause();
        break;
      case "play":
        handlePlay();
        break;
      case "stop":
        handleStop();
        break;
      default:
        break;
    }
  }, [videoStatus]);
  return (
    <div
      ref={videoRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video style={{ width: "100%", height: "auto" }}>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
