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
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ users }) => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const router = useRouter();
  return (
    <div className="border-b bg-white sticky top-0 z-50 py-4">
      {" "}
      <div className="flex justify-between max-w-5xl mx-5 lg:mx-auto">
        <div
          className="relative hidden lg:inline-grid items-center"
          onClick={() => router.push("/")}
        >
          <span className="logo">Clonestagram</span>
        </div>
        <Search users={users} />

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="navBtn md:hidden" />
          {session ? (
            <div className="hidden md:flex items-center justify-end space-x-4">
              <PaperAirplaneIcon className="navBtn" />
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
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
