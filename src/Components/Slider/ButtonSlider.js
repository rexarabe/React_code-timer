import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function ButtonSlider({direction, moveSlide }) {

  return (
    <button onClick={moveSlide} className={direction === "next" ? "ButtonSlide next" : "ButtonSlide prev"}>
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
};
