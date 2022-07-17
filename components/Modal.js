import { Dialog, Transition, Fragment } from "@headlessui/react";
import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [image, setImage] = useState(null);
  const filePickerRef = useRef();

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            <div className="relative bg-white rounded max-w-sm mx-auto p-8 mt-[200px]">
              <div>
                {" "}
                {image && <img src={image} alt="" />}
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900 py-3"
                >
                  Upload a photo
                </Dialog.Title>
                <input
                  type="file"
                  hidden
                  ref={filePickerRef}
                  onChange={handleChange}
                />
              </div>

              <button
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                onClick={() => filePickerRef.current.click()}
              >
                Select From Computer
              </button>
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
