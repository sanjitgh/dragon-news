import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <p className="font-semibold">All Category ({categories.length})</p>
      <div className="flex flex-col justify-start gap-2 my-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="font-medium btn border-none shadow-none bg-transparent"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
