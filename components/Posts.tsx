import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);
  return (
    <div className="grid-cols-3 gap-2">
      {posts &&
        posts.map((post, i) => {
          return <Post post={post.data()} key={i} />;
        })}{" "}
    </div>
  );
};

export default Posts;
