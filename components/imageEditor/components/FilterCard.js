import React from "react";

const FilterCard = ({ card, image, setMainFilter }) => {
  const handleClick = (e) => {
    setMainFilter(e.target.className);
    console.log(image);
  };
  return (
    <div
      className={`p-2 cursor-pointer ${card.className}`}
      onClick={(e) => handleClick(e)}
    >
      <div
        className="imgContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h3>{card.title}</h3>
      </div>
    </div>
  );
};

export default FilterCard;
