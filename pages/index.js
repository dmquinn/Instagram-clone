import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
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
      <Header users={users} />
      <Feed users={users} />
    </div>
  );
}
