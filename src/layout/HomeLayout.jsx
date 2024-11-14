import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-components/LeftNavbar";
import RightNav from "../components/Layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <div className="font-poppins container mx-auto px-3">
        <header>
          <Header></Header>
          <LatestNews></LatestNews>
        </header>
        <nav className="my-5">
          <Navbar></Navbar>
        </nav>
        <main className="container mx-auto px-3 md:grid grid-cols-12 gap-3">
          <aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
          </aside>
          <section className="col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className="col-span-3">
            <RightNav></RightNav>
          </aside>
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
