import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="text-center py-2">
        <img src={logo} alt="" />
      </div>
      <h2 className="text-gray-400 text-lg">Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
