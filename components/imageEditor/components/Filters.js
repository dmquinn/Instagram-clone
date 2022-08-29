import { Dialog, Transition } from "@headlessui/react";
import { Div } from "react";
import FilterCards from "./FilterCards";

const Filters = ({ image, filtersOpen, setFiltersOpen }) => {
  return (
    <Transition.Child
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative bg-white rounded-lg w-screen md:max-w-2xl mx-auto mt-[90px] h-[500px] shadow-lg">
        HELLO
      </div>
    </Transition.Child>
  );
};

export default Filters;
