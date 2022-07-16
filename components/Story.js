import Image from "next/image";
import React from "react";

const Story = ({ suggestion }) => {
  return (
    <div className="">
      <div className="border-2 border-red-500 rounded-full h-16 w-16 p-[2px]">
        <img
          src={suggestion.image}
          alt="Picture of the author"
          className="rounded-full w-16 h-16 object-cover"
        />
      </div>
      <h1 className="truncate text-center">{suggestion.first_name}</h1>
    </div>
  );
};

export default Story;
