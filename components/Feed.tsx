import { useSession } from "next-auth/react";
import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = ({ users }) => {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mx-w-6xl mx-auto mt-5 ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        <Stories users={users} />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid">
        <div className="fixed">
          <MiniProfile />
          <Suggestions users={users} />
        </div>
      </section>
    </main>
  );
};

export default Feed;
