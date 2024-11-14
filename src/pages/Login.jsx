import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[650px] flex justify-center items-center">
      <div className="card rounded-none w-full max-w-[500px] bg-white ">
        <h1 className="text-2xl mt-10 font-medium text-center">
          Login your account
        </h1>
        <form className="card-body">
          <div className="divider my-0"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-800 text-white hover:bg-gray-700 w-full">
              Login
            </button>
          </div>
        </form>
        <p className="px-5 pb-5 text-center font-semibold text-gray-500">
          Dont’t Have An Account ? <Link to={"/auth/register"} className="text-pink-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;