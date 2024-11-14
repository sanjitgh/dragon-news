import { IoSaveOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { author, rating, thumbnail_url, title, total_view, details } = news;

  return (
    <>
      <div className="border mb-8">
        {/* auther information */}
        <div className="flex bg-slate-100 p-4 justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <div>
              <img src={author.img} className="w-10 rounded-full" alt="" />
            </div>
            <div>
              <p className="font-medium text-lg">{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <button>
              <IoSaveOutline />
            </button>
            <button>
              <CiShare2 />
            </button>
          </div>
        </div>
        <div className="p-3">
          <h1 className="font-bold text-xl my-3">{title}</h1>
          {/* thumbnail image */}
          <img
            src={thumbnail_url}
            className="w-full max-h-80 rounded object-cover"
            alt=""
          />
          <p className="text-gray-500 my-3">{details.slice(0, 350)}...</p>
          <span className="font-semibold text-orange-500 cursor-pointer">
            Read More
          </span>
          <div className="divider"></div>
          {/* card footer */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Rating
                className="text-xl"
                initialRating={4}
                emptySymbol={<CiStar />}
                fullSymbol={<IoIosStar />}
              />
              <span>{rating.number}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <FaEye />
              <p className="text-gray-500">{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
