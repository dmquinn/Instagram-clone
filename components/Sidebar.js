import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <span className="logo text-black">Mazenta</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
