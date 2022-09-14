import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="grid h-screen place-items-center">
          <h1 className="logo text-black">Clonestagram</h1>
          <button
            onClick={() => signIntoProvider(provider.id, { callbackUrl: "/" })}
            className="text-white p-3 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 rounded-lg shadow -mt-10"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
