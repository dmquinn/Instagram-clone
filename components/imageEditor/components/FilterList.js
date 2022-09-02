import React from "react";
import FilterCard from "./FilterCard";
import imageObjects from "./ImageObjects";

const FilterList = ({ image, setMainFilter }) => {
  return (
    <div className="grid grid-cols-3 p-2">
      {imageObjects.map((card, i) => {
        return (
          <FilterCard
            key={i}
            card={card}
            image={image}
            setMainFilter={setMainFilter}
          />
        );
      })}
    </div>
  );
};

export default FilterList;
