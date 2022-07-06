import Image from "next/image";
import React, { useEffect, useState } from "react";
const Stories = () => {
  const baseUrl = "https://ghibliapi.herokuapp.com/";
  const [hasError, setErrors] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [users, setUsers] = useState([]);

  const fetcher = async () => {
    const res = await fetch("https://reqres.in/api/users?per_page=12");
    const json = await res.json();
    const userResult = json.data;
    setUsers(
      userResult.map((user) => {
        return {
          isActive: Math.random() < 0.5, // 50/50 chance of isActive
          ...user,
        };
      })
    );
  };
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll">
      {!!users &&
        users.map((suggestion, i) => (
          <div key={i}>
            <Image
              src={suggestion.avatar}
              alt="Picture of the author"
              width={100}
              height={100}
              fit="fill"
            />
            <h1>
              {suggestion.first_name} {suggestion.last_name}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Stories;
