import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/Layout-components/RightNav";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(data.data);
  return (
    <div className="container mx-auto px-3">
      <header>
        <Header></Header>
      </header>
      <main className="grid md:grid-cols-12 gap-y-10 md:gap-5">
        <section className="md:col-span-9 col-span-12">
          <h2 className="font-semibold text-2xl">Dragon News</h2>
          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} className="w-full" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title">{news?.title}!</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={"/category/08"} className="btn bg-pink-500 text-white hover:bg-pink-600 font-medium mt-8">  All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="md:col-span-3 col-span-12">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
