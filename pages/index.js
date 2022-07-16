import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetcher = async () => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((jsonResponse) => {
        setUsers(jsonResponse.users);
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  };
  useEffect(() => {
    fetcher();
    console.log(users);
  }, []);
  return (
    <div>
      <Head>
        <title>Social Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header users={users} />
      <Feed users={users} />
      <Modal />
    </div>
  );
}
