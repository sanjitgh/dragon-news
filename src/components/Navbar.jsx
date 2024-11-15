import { Link } from "react-router-dom";
import user from "../assets/user.png";
import { useContext } from "react";
import { authContext } from "./provaider/AuthProvaider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  return (
    <div className="flex justify-between">
      <div>{user && user.email}</div>
      <nav className="nav space-x-5 text-gray-500">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </nav>
      <div>
        <div className="flex items-center gap-5">
          <img src={user} alt="" />
          {user && user.email ? (
            <button onClick={logOut} className="btn bg-gray-800 text-white font-medium hover:bg-pink-600 px-7">Logout</button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn bg-gray-800 text-white font-medium hover:bg-pink-600 px-7"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
