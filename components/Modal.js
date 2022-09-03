import { Dialog, Transition, Fragment } from "@headlessui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterState";
import { modalState } from "../atoms/modalAtom";
import Cropper from "react-easy-crop";
import Filters from "./imageEditor/components/Filters";
import getCroppedImg from "./cropImage";

const Modal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [image, setImage] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [mainFilter, setMainFilter] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const filePickerRef = useRef();
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      console.log("donee", { croppedImage });
      setImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
    setFiltersOpen(!filtersOpen);
  }, [croppedAreaPixels, filtersOpen, image]);

  const handleChange = (e) => {
    if (e.target.files.length) {
      console.log(
        "file",
        e.target.files[0],
        URL.createObjectURL(e.target.files[0])
      );
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100] inset-0 overflow-y-auto"
        onClose={setModalOpen}
      >
        <div className="justify-center sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

            {!filtersOpen && (
              <>
                <div className="first relative bg-white rounded-lg w-screen md:max-w-2xl mx-auto mt-[90px] h-[500px] shadow-lg">
                  <div className="p-3 justify-center content-center border-b h-full items-center">
                    {" "}
                    <div className="flex">
                      {!image ? (
                        <h1 className="font-semibold w-full h-9 border-b">
                          Create new Post
                        </h1>
                      ) : (
                        <h1 className="font-semibold w-full h-9 border-b">
                          Crop
                        </h1>
                      )}
                      {image && (
                        <h1
                          onClick={showCroppedImage}
                          className="cursor-pointer font-bold text-blue-400 right-10"
                        >
                          Next
                        </h1>
                      )}
                    </div>
                    {image ? (
                      <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 3}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                      />
                    ) : (
                      <>
                        <img
                          src="https://img.icons8.com/ios/344/image.png/"
                          alt=""
                          className={`${mainFilter} h-28 opacity-80 mx-auto mt-24 mb-10`}
                        />
                        <button
                          onClick={() => filePickerRef.current.click()}
                          className="bg-blue-400 px-3 py-1 rounded-md text-white text-sm font-bold mb-20"
                        >
                          Select From Computer
                        </button>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={handleChange}
                  />{" "}
                </div>
                )
              </>
            )}
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
      </Dialog>{" "}
      {filtersOpen && (
        <Filters
          image={image}
          filtersOpen={filtersOpen}
          setFiltersOpen
          setMainFilter={setMainFilter}
        />
      )}
    </Transition.Root>
  );
};

export default Modal;
