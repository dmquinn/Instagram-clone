import Image from "next/image";
import React from "react";

const Story = ({ suggestion }) => {
  return (
    <div className="max-w-[70px]">
      <div
        className={
          suggestion.hasStory
            ? "border border-2 border-red-500 rounded-full h-16 w-16 items-center"
            : "border border-gray-500 rounded-full h-16 w-16 items-center"
        }
      >
        <img
          src={suggestion.avatar}
          alt="Picture of the author"
          className="rounded-full  h-[56px] w-[56px] object-cover mt-[3px] ml-[3px]"
        />
      </div>
      <h1 className="text-center truncate">
        {suggestion.firstName}
        {suggestion.lastName}
      </h1>
    </div>
  );
};

export default Story;
