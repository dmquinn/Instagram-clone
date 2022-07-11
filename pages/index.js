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
        <Sidebar />
        <div className="p-6 w-full">
          <main className="p-6 rounded-3xl main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in bg-gray-100">
            <Header />
            <div className="main-content flex flex-col p-4">
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
