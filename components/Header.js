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

  console.log(session?.user.image);
  return (
    <>
      {" "}
      <div>
        <Head>
          <style>{dom.css()}</style>
        </Head>
        ...
      </div>
      <header className="header py-4 px-12">
        <div className="header-content flex items-center flex-row">
          <Search />
          <div className="flex items-center ml-auto text-gray-800">
            {session?.user?.image && (
              <span className="px-6 flex items-center">
                {" "}
                <Image
                  src={session?.user.image}
                  alt=""
                  height={20}
                  width={20}
                  className="rounded-full"
                />
              </span>
            )}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faPaperPlane} className="px-6 mr-6" />
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-blue-700 text-white p-3 font-bold px-8 rounded-full shadow-2xl">
              + Create Post
            </button>{" "}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
