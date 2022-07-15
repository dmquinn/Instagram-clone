import { Dialog, Transition, Fragment } from "@headlessui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
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
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900 py-3"
                >
                  Upload a photo
                </Dialog.Title>
                <input type="file" hidden />
              </div>
              <div className="mt-2 mb-2">
                <input
                  clasName="border-none focus:ring-0 w-full text-center "
                  type="text"
                  placeholder="Please enter a caption..."
                />
              </div>
              <button
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Upload Post
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

    // <Transition.Root show={open} as={Fragment}>
    //      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //         <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //   <div className="flex items-center justify-center min-h-screen">
    //     <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    //     <div className="relative bg-white rounded max-w-sm mx-auto p-8">
    //       <Dialog.Title className="text-xl">Title of dialog</Dialog.Title>
    //       <Dialog.Description>
    //         Description of dialog contents.
    //       </Dialog.Description>
    //       <button
    //         className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
    //         onClick={() => setIsOpen(false)}
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
    //         onClick={() => setIsOpen(false)}
    //       >
    //         Confirm
    //       </button>
    //     </div>
    //   </div>          </Transition.Child>

    // </Dialog>
    //  </Transition.Root>
  );
};

export default Modal;
