import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPaperPlane } from "@fortawesome/fontawesome-free-regular";

const Header = () => {
  return (
    <header className="header py-4 px-4">
      <div className="header-content flex items-center flex-row">
        <Search />
        <div className="content-center ml-auto text-gray-800">
          <FontAwesomeIcon icon={faBell} size="xl" />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="px-6 mr-6 "
            size="xl"
          />
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-blue-700 text-white p-3 font-bold px-8 rounded-full shadow-2xl">
            + Create Post
          </button>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
