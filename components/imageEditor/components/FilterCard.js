import React from "react";

const FilterCard = ({ card, image, setMainFilter }) => {
  const handleClick = (e) => {
    setMainFilter(e.target.className);
  };
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
        }}
      >
        <h3>{card.title}</h3>
      </div>
    </div>
  );
};

export default FilterCard;
