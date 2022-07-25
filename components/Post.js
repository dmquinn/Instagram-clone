import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white my-7 border rounded-lg">
      <div className="flex items-center p-5">
        <img
          src={post.profileImg}
          alt={post.username}
          className="rounded-full h-12 w-12 object-cover p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="object-cover w-full" alt={post.title} src={post.image} />
      <div className="flex justify-between px-4 pt-4">
        {" "}
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{post.username} </span>
          {post.caption}
        </p>
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 mr-4" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
