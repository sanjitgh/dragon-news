import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../components/provaider/AuthProvaider";

const Register = () => {
  const navigate = useNavigate()
  const { setUser, createNewUser } = useContext(authContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        e.target.reset();
        const user = result.user;
        setUser(user)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };
  return (
    <div className="min-h-[650px] flex justify-center items-center">
      <div className="card rounded-none w-full max-w-[500px] bg-white ">
        <h1 className="text-2xl mt-10 font-medium text-center">
          Register your account
        </h1>

        <form onSubmit={handelSubmit} className="card-body">
          <div className="divider my-0"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
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
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-800 text-white hover:bg-gray-700 w-full">
              Register
            </button>
          </div>
        </form>
        <p className="px-5 pb-5 text-center font-semibold text-gray-500">
          Already have An Account ?{" "}
          <Link to={"/auth/login"} className="text-pink-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
