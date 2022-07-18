import { Dialog, Transition, Fragment } from "@headlessui/react";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterState";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [image, setImage] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filePickerRef = useRef();

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleOpen = (e) => {
    filtersOpen ? setFiltersOpen(false) : setFiltersOpen(true);
    console.log(filtersOpen);
  };
  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100] inset-0 overflow-y-auto"
        onClose={setModalOpen}
      >
        <div className="flex items-end justify-center sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70 " />
            <div className="relative bg-white rounded-lg w-screen md:max-w-2xl mx-auto mt-[100px] shadow-lg">
              <div className="flex p-3 justify-center border-b">
                <h1 className="font-bold">Create new Post</h1>
                {image && (
                  <h1
                    onClick={handleOpen}
                    className="cursor-pointer font-bold text-blue-400 absolute right-10"
                  >
                    Next
                  </h1>
                )}
              </div>

              <div className="grid grid-cols-5">
                <div className={filtersOpen ? "col-span-3" : "col-span-5"}>
                  <div className="flex justify-center">
                    {image ? (
                      <img
                        src={image}
                        alt=""
                        className="rounded-b-lg h-full object-cover"
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/ios/344/image.png/"
                        alt=""
                        className="h-20 opacity-80 my-32"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={handleChange}
                  />
                  {!image && (
                    <button
                      onClick={() => filePickerRef.current.click()}
                      className="bg-blue-500 px-3 py-1 rounded-md text-white text-sm font-bold mb-20"
                    >
                      Select From Computer
                    </button>
                  )}
                </div>
                {filtersOpen ? (
                  <div className="col-span-2 filtersTab active"></div>
                ) : (
                  <div className="filtersTab"></div>
                )}
              </div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          ></Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
