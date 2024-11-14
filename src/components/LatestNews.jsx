import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-gray-200 p-2 my-7">
      <p className="bg-pink-600 text-white p-3 rounded-sm w-28 text-center font-medium">
        Latest
      </p>
      <Marquee
        pauseOnHover="true"
        speed={20}
        className="space-x-16 font-medium"
      >
        <Link to={"/news"}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque
          vitae accusantium sit facere debitis!
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque
          vitae accusantium sit facere debitis!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
