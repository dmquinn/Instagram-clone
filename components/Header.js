import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPaperPlane } from "@fortawesome/fontawesome-free-regular";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { useSession } from "next-auth/react";
import Image from "next/image";
config.autoAddCss = false;

const Header = () => {
  const { data: session } = useSession();

  return (
    <>
      {" "}
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <div className="flex items-center justify-center">
        <div>
          <span className="logo">Mazenta</span>
        </div>
        <Search />
        <div className="items-center text-gray-800">
          {session?.user?.image ? (
            <div className="px-6 flex items-center">
              {" "}
              <Image
                src={session?.user.image}
                alt=""
                height={20}
                width={20}
                className="rounded-full"
              />
            </div>
          ) : (
            <button>Sign In</button>
          )}
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faPaperPlane} className="px-6 mr-6" />
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-blue-700 text-white p-3 font-bold px-8 rounded-full shadow-2xl">
            + Create Post
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Header;
