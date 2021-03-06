import { Dialog, Transition, Fragment } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterState";
import { modalState } from "../atoms/modalAtom";
import Filters from "./imageEditor/components/Filters";
import { db, storage } from "../firebase/firebase";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "@firebase/firestore";
import Draggable from "./Draggable";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";

const Modal = () => {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [file, setFile] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [mainFilter, setMainFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const uploadPost = async () => {
    console.log(session.user, captionRef.current.value);
    if (loading) return;
    setLoading(true);
    if (!file) {
      alert("Please upload an image first!");
    }

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.name,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    const storageRef = ref(storage, `posts/${docRef.id}/image`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    await uploadBytesResumable(storageRef, file, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(storageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setModalOpen(false);
    setLoading(false);
    setFile(null);
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      console.log(e.target.files[0]);

      setFile({
        file: e.target.files[0],
        display: URL.createObjectURL(e.target.files[0]),
      });
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
            <div className="relative bg-white rounded-lg w-screen md:max-w-2xl mx-auto mt-[90px] h-[500px] shadow-lg">
              <div className="flex p-3 justify-center border-b h-full">
                <h1 className="font-semibold w-full h-9 border-b">
                  Create new Post
                </h1>
                {file && (
                  <h1
                    onClick={handleOpen}
                    className="cursor-pointer font-bold text-blue-400 absolute right-10"
                  >
                    Next
                  </h1>
                )}
              </div>

              <div className="absolute top-11 grid grid-cols-5 h-full">
                <div
                  className={filtersOpen ? "col-span-3 h-full" : "col-span-5"}
                >
                  <div className="h-20 w-full">
                    <div className="flex justify-center min-h-[300px]">
                      {file ? (
                        <Draggable image={file.display} />
                      ) : (
                        <img
                          src="https://img.icons8.com/ios/344/image.png/"
                          alt=""
                          className="h-20 opacity-80 my-32"
                        />
                      )}
                    </div>
                  </div>
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={handleChange}
                  />
                  {!file && (
                    <button
                      onClick={() => filePickerRef.current.click()}
                      className="bg-blue-400 px-3 py-1 rounded-md text-white text-sm font-bold mb-20"
                    >
                      Select From Computer
                    </button>
                  )}
                </div>

                <div
                  className={
                    filtersOpen
                      ? "col-span-2 filtersTab active bg-blue-200"
                      : "filtersTab col-span-2"
                  }
                >
                  <Filters />
                </div>
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
