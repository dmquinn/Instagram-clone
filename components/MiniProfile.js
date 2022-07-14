import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between ml-10">
      <img
        src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80"
        alt=""
        className="border rounded-full h-16 w-16 p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">sssangha</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
