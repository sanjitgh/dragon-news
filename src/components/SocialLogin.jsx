import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mb-10">
      <p className="font-semibold text-lg mb-3">Login With</p>
      <div className="flex flex-col gap-2">
        <button className="btn bg-transparent border">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn bg-transparent border">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
