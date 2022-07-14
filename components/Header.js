import React from "react";
import Search from "./Search";
import {
  PlusCircleIcon,
  HomeIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
// config.autoAddCss = false;

const Header = ({ users }) => {
  const { data: session } = useSession();

  return (
    <div className="border-b bg-white sticky top-0 z-50 py-4">
      {" "}
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid items-center">
          <span className="logo">Mazenta</span>
        </div>
        <Search users={users} />

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="navBtn md:hidden" />
          {session ? (
            <div className="hidden md:flex items-center justify-end space-x-4">
              <PaperAirplaneIcon className="navBtn" />
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <div className="px-6 flex items-center">
                {" "}
                <Image
                  onClick={signOut}
                  src={session?.user.image}
                  alt=""
                  height={25}
                  width={25}
                  className="rounded-full"
                />
              </div>
            </div>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
