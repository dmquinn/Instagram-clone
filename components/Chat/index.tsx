import React, { useRef, useState } from "react";
import { db, storage } from "../../firebase/firebase";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { Query } from "@firebase/firestore-types";
import * as firebase from "firebase/app";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { collection, orderBy, serverTimestamp } from "firebase/firestore";

const Chat = () => {
  const { data: session } = useSession();
  const firestore = db;

  const dummy = useRef();
  const messagesRef = collection(firestore, "messages");
  const query = orderBy(messagesRef, "createdAt");

  const [messages] = useCollectionData(query, { id: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { name, image } = session?.user;

    await add(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      name,
      image,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
function add(
  messagesRef: CollectionReference<DocumentData>,
  arg1: { text: string; createdAt: any; name: string; image: string }
) {
  throw new Error("Function not implemented.");
}
