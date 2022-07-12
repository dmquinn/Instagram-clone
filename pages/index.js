import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";

export default function Home() {
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
            <Header />
            <div className="main-content flex flex-col p-4 border rounded-lg">
              <Stories />

              <h1 className="font-bold text-2xl text-gray-700">Feed</h1>
              <Feed />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
