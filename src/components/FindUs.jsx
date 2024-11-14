import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <>
      <p className="font-semibold text-lg mb-3">Find Us All</p>
      <div className="border">
        <div className="flex flex-col">
          <button className="btn rounded-none bg-transparent border">
            <FaFacebookF /> Facebook
          </button>
          <button className="btn rounded-none bg-transparent border">
            <FaTwitter /> Twitter
          </button>
          <button className="btn rounded-none bg-transparent border">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </>
  );
};

export default FindUs;
