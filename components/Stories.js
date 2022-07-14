import Image from "next/image";
import Link from "next/link";
import Story from "./Story";
const Stories = ({ users }) => {
  return (
    <div className="">
      <div className="flex p-6 space-x-2 overflow-x-scroll overflow-x-scroll border border-lg">
        {!!users &&
          users.map((suggestion, i) => (
            <Story key={i} suggestion={suggestion} />
          ))}
      </div>
    </div>
  );
};

export default Stories;
