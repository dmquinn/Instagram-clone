import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetcher = async () => {
    const res = await fetch("https://reqres.in/api/users?per_page=12");
    const json = await res.json();
    const userResult = json.data;
    setUsers(
      userResult.map((user) => {
        return {
          isActive: Math.random() < 0.5,
          ...user,
        };
      })
    );
  };
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div>
      <Head>
        <title>Social Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row min-h-screen ">
        {/* <Sidebar /> */}
        <div className="p-6 w-full">
          <main className="">
            <Header users={users} />
            <div className="main-content flex flex-col p-4 border rounded-lg">
              <Stories users={users} />

              <h1 className="font-bold text-2xl text-gray-700">Feed</h1>
              <Feed />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
