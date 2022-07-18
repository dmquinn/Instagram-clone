import React, { useState } from "react";
import imageObjects from "../imageObjects";

const ImageCard = ({
  image,
  filtersTabOpen,
  setMainFilter,
  setBrightness,
  setContrast,
  setSaturation,
}) => {
  const handleClick = (e) => {
    setBrightness(undefined);
    setContrast(undefined);
    setSaturation(undefined);
    setMainFilter(e.target.className);
  };
  return (
    <div
      className="grid grid-cols-3"
      style={{ visibility: filtersTabOpen ? "visible" : "hidden" }}
    >
      {imageObjects.map((card, i) => {
        return (
          <div
            className={card.className}
            onClick={(e) => handleClick(e)}
            style={{ padding: "20px", cursor: "pointer" }}
          >
            <div
              className="imgContainer"
              style={{
                backgroundImage: `url(${image})`,
                pointerEvents: "none",
              }}
              key={i}
            >
              <h3>{card.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
