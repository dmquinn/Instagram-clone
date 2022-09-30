import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { mainFilterState } from "../atoms/MainFilterAtom";
import { modalState } from "../atoms/modalAtom";
import getCroppedImg from "./cropImage";
import Cropper from "react-easy-crop";
import Filters from "./imageEditor/components/Filters";
import Caption from "./Caption";

const Modal = ({ users }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [captionsOpen, setCaptionsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [mainFilter, setMainFilter] = useState(mainFilterState);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const filePickerRef = useRef(null);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);
      setImageSrc(null);
      setFiltersOpen(true);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };
  return (
    <>
      {modalOpen && (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 bg-modal-back text-xs lg:text-base overflow-y-auto">
            <div className="flex">
              <>
                <div
                  className={
                    filtersOpen
                      ? "relative bg-plain-white opacity-100 rounded-lg w-screen md:max-w-lg mx-auto mt-[90px] h-[500px] shadow-lg overflow-hidden"
                      : "relative bg-plain-white opacity-100 rounded-lg w-screen md:max-w-2xl mx-auto mt-[90px] h-[500px] shadow-lg overflow-hidden"
                  }
                >
                  {" "}
                  <div className="flex text-center">
                    {imageSrc ? (
                      <h1 className="font-semibold w-full h-9 py-2">Crop</h1>
                    ) : croppedImage ? (
                      <h1 className="font-semibold w-full h-9">Edit</h1>
                    ) : (
                      <h1 className="font-semibold w-full h-9 border-b py-2">
                        Create New Post
                      </h1>
                    )}
                    {imageSrc && (
                      <h1
                        onClick={showCroppedImage}
                        className="cursor-pointer font-bold text-link-blue right-10 p-3"
                      >
                        Next
                      </h1>
                    )}
                  </div>
                  {imageSrc ? (
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      zoom={zoom}
                      aspect={4 / 4}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                  ) : croppedImage ? (
                    <img
                      src={croppedImage}
                      className={`${mainFilter} object-cover p-0`}
                      alt="cropped"
                    />
                  ) : (
                    <div className="text-center">
                      <img
                        src="https://img.icons8.com/ios/344/image.png/"
                        alt=""
                        className="h-28 opacity-80 mx-auto mt-24 mb-10"
                      />
                      <button
                        onClick={() => filePickerRef!.current!.click()}
                        className="bg-link-blue px-3 py-1 rounded-md text-plain-white text-sm font-bold mb-20"
                      >
                        Select From Computer
                      </button>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  hidden
                  ref={filePickerRef}
                  onChange={onFileChange}
                />

                {filtersOpen ? (
                  <Filters
                    image={croppedImage}
                    filtersOpen={filtersOpen}
                    setMainFilter={setMainFilter}
                    mainFilter={mainFilter}
                    captionsOpen={captionsOpen}
                    setFiltersOpen={setFiltersOpen}
                    setCaptionsOpen={setCaptionsOpen}
                  />
                ) : captionsOpen ? (
                  <Caption
                    captionsOpen={captionsOpen}
                    img={croppedImage}
                    setImageSrc={setImageSrc}
                    setModalOpen={setModalOpen}
                    setCroppedImage={setCroppedImage}
                    setCaptionsOpen={setCaptionsOpen}
                  />
                ) : (
                  <div />
                )}
              </>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
