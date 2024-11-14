import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <p className="font-semibold text-lg">Login With</p>
      <div>
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
