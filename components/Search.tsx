import React from "react";

const Search = ({ users }) => {
  const handleChange = () => {};
  return (
    <form action="#" className="px-12">
      <div className="hidden md:flex relative">
        <div className="inline-flex items-center justify-left px-4 absolute left-0 top-0 h-full w-10 text-gray-400 bg-searchBar w-60 rounded-lg">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          id="search"
          type="text"
          name="search"
          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-20 rounded-lg w-full h-9 bg-gray-200"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <div className="flex md:hidden">
        <a
          href="#"
          className="flex items-center justify-center h-10 w-10 border-transparent"
        ></a>
      </div>
    </form>
  );
};

export default Search;
