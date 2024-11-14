import { useEffect, useState } from "react";

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
          <button className="font-medium btn" key={category.category_id}>{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;