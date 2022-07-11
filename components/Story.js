import Image from "next/image";
import React from "react";

const Story = ({ suggestion }) => {
  return (
    <div>
      <div className="border-2 border-red-500 rounded-full h-20 w-20 object-cover p-[2]px]">
        <Image
          src={suggestion.avatar}
          alt="Picture of the author"
          fit="fill"
          width="100"
          height="100"
          className="rounded-full"
        />
      </div>
      <h1 className="truncate text-center">{suggestion.first_name}</h1>
    </div>
  );
};

export default Story;
