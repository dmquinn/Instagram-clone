import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Story from "./Story";
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [users, setUsers] = useState([]);

  const fetcher = async () => {
    const res = await fetch("https://reqres.in/api/users?per_page=12");
    const json = await res.json();
    const userResult = json.data;
    setUsers(
      userResult.map((user) => {
        return {
          isActive: Math.random() < 0.5,
          ...user,
        };
      })
    );
  };
  useEffect(() => {
    fetcher();
  }, []);
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
