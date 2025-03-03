"use client"; // Carousel.js
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Slide1 from "@/comopnents/Slide1";
import Slide2 from "@/comopnents/Slide2";
import Slide3 from "@/comopnents/Slide4";

const Carousel = ({
  items,
  changeVideoStatus = () => {},
  changeVideo = () => {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  const changeSlide = (slideIndex) => {
    setCurrentIndex((prevIndex) => slideIndex);
  };

  // useEffect
  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {items.map((Item, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{
              transform: `translateX(-${currentIndex * 100}vw)`,
              transition: "transform 2s ease-in-out",
            }}
          >
            {
              <Item
                change={changeSlide}
                next={nextSlide}
                prev={prevSlide}
                currentPage={currentIndex}
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
