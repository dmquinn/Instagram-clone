import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import Story from "./Story";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    paritialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    paritialVisibilityGutter: 30,
  },
};
const Stories = ({ users }) => {
  return (
    <div className="border p-5 rounded-lg">
      <Carousel responsive={responsive}>
        {!!users &&
          users.map((suggestion, i) => (
            <Story key={i} suggestion={suggestion} />
          ))}
      </Carousel>{" "}
    </div>
  );
};

export default Stories;
