import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Story from "./Story";
const Stories = ({ users }) => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <>
      <h1 className="font-bold text-2xl text-gray-700">Stories</h1>

      <div className="flex p-6 space-x-2 overflow-x-scroll overflow-x-scroll">
        {!!users &&
          users.map((suggestion, i) => (
            <Story key={i} suggestion={suggestion} />
          ))}
      </div>
    </>
  );
};

export default Stories;
