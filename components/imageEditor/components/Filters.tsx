import { Dialog, Transition } from "@headlessui/react";
import { Div } from "react";
import FilterList from "./FilterList";

const Filters = ({ image, filtersOpen, setFiltersOpen, setMainFilter }) => {
  return (
    <Transition.Root show={filtersOpen} as={Div}>
      <div className="flex items-end justify-center sm:min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
        <Transition.Child
          as={Div}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="second relative bg-white rounded-lg w-full md:max-w-4xl mx-auto -mt-[100px] ml-[330px] h-[500px] shadow-lg z-[200]">
            <h1 className="p-3 font-semibold w-full border-b">Edit</h1>
            <div className="grid grid-cols-5">
              <img className="object-cover h-[500px] col-span-3" src={image} />{" "}
              <div className="col-span-2 h-full bg-white">
                <FilterList image={image} setMainFilter={setMainFilter} />
              </div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition.Root>
  );
};

export default Filters;
