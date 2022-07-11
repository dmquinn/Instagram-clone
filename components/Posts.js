import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "George",
    userImg:
      "https://images.unsplash.com/photo-1455637350775-730a9e5a8310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img: "https://images.unsplash.com/photo-1498673394965-85cb14905c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "Look at this!",
  },
  {
    id: "1",
    username: "Mike",
    userImg:
      "https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    img: "https://images.unsplash.com/photo-1601011850287-43e30b7db748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    caption: "AND THIS!",
  },
];
const Posts = () => {
  console.log(posts);
  return (
    <div className="grid-cols-3 gap-2">
      {posts &&
        posts.map((post) => {
          <Post username={post.username} />;
        })}{" "}
    </div>
  );
};

export default Posts;
