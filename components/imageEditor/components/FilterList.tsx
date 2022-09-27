import React from "react";
import FilterCard from "./FilterCard";
import imageObjects from "./ImageObjects";

const FilterList = ({ image, setMainFilter, mainFilter }) => {
  const handleClick = (e) => {
    console.log(e.target.className);
    setMainFilter(e.target.className.substring(9));
  };
  return (
    <div className="grid grid-cols-3 p-5 pl-9">
      {imageObjects.map((card, i) => {
        return (
          <div key={i}>
            <div className={`p-2 cursor-pointer ${card.className}`}>
              <div
                className={`imgContainer cursor-pointer ${card.className}`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
                onClick={(e) => handleClick(e)}
              >
                <h3 className="pointer-events-none">{card.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterList;
