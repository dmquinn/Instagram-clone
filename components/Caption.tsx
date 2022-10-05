import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { db, storage } from "../firebase/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";

const Caption = ({
  captionsOpen,
  img,
  setImageSrc,
  setModalOpen,
  setCroppedImage,
  setCaptionsOpen,
}) => {
  const captionRef = useRef(null);
  const locationRef = useRef(null);
  console.log(img);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);
    if (!img) {
      alert("Please upload an image first!");
    }

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.name,
      caption: captionRef.current.value,
      location: locationRef.current.value,
      profileImg: session.user.image,
      image: img,
      timestamp: serverTimestamp(),
    });

    const storageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadBytes(storageRef, img).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(storageRef);
      console.log("uploaded successfully", downloadURL);
      await updateDoc(doc(db, "posts", docRef.id), {
        // image: downloadURL,
        // console.log("okay here too")
      });
    });
    setModalOpen(false);
    setLoading(false);
    setImageSrc(null);
    setCroppedImage(null);
    setCaptionsOpen(false);
  };
  return (
    <>
      {captionsOpen && (
        <div
          className={
            !captionsOpen
              ? "w-0 bg-plain-white mt-[90px] h-[100%]"
              : "filtersOpen bg-plain-white mt-[90px] h-[500px] -ml-4"
          }
        >
          <div className="pl-5 pr-1">
            {" "}
            <div className="flex justify-end">
              <h1
                onClick={uploadPost}
                className="cursor-pointer font-bold text-link-blue right-10 p-3"
              >
                Share
              </h1>
            </div>
            <div className="flex">
              <Image
                src={session?.user.image}
                alt=""
                height={25}
                width={25}
                className="rounded-full"
              />
              <p className="px-2 font-semibold">{session?.user.name}</p>
            </div>
            <textarea
              rows={6}
              placeholder="Write a caption"
              className="mt-2 w-full outline-none"
              ref={captionRef}
            />
            <div className="flex py-3 border-b border-t w-full outline-none justify-between">
              <input
                placeholder="Add location"
                className="outline-none"
                ref={locationRef}
              />{" "}
              <img
                src="https://www.svgrepo.com/show/127575/location-sign.svg"
                className="h-5 opacity-50"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Caption;
