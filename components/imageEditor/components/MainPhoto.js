import React, { useEffect } from "react";

const MainPhoto = ({
  image,
  mainFilter,
  contrast,
  brightness,
  saturation,
  mainOverlay,
}) => {
  useEffect(() => {
    console.log("main", mainOverlay);
  }, [mainOverlay]);
  const filterGetter = () => {
    if (
      contrast !== undefined &&
      brightness !== undefined &&
      saturation !== undefined
    ) {
      return `contrast(${contrast}%) brightness(${brightness}%) saturate(${saturation}%)`;
    } else if (contrast !== undefined) {
      return `contrast(${contrast}%)`;
    } else if (brightness !== undefined) {
      return `brightness(${brightness}%)`;
    } else if (saturation !== undefined) {
      return `saturate(${saturation}%)`;
    }
  };

  return (
    <div className="mainImageContainer my-20 h-4/6">
      <img
        src={image}
        alt=""
        className={`mainPhoto ${mainFilter}  h-full w-full object-cover`}
        style={{
          filter: filterGetter(),
        }}
      />{" "}
      <div className={`${mainOverlay} mainPhotoOverlay`}></div>
    </div>
  );
};

export default MainPhoto;
