import { signOut, useSession } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center justify-between ml-10">
      <img
        src={session?.user?.image}
        alt=""
        className="border rounded-full h-16 w-16 p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
