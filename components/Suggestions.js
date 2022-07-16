import React, { useEffect, useState } from "react";

const Suggestions = ({ users }) => {
  const [suggestions, setSuggestions] = useState([]);
  const extraInfo = ["Follows you", "New to Instagram"];
  useEffect(() => {
    const suggestions = users.slice(0, 5).map((user, i) => {
      return user;
    });
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-500">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={suggestion.avatar}
            alt=""
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.first_name}</h2>
            <h3 className="text-xs text-gray-400">
              {extraInfo[Math.floor(Math.random() * extraInfo.length)]}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-semibold ">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
