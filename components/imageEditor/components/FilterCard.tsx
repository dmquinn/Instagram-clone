import React from "react";

const FilterCard = ({
  card,
  image,
  setMainFilter,
  mainFilter,
  imageObjects,
}) => {
  const handleClick = (e) => {
    console.log(e.target.className.split(" ")[0]);
    setMainFilter(e.target.className.replace("imgContainer", ""));
    console.log(mainFilter);
  };
  return (
    <div
      className={`p-2 cursor-pointer ${imageObjects.className}`}
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
