import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import CATEGORIES from "../utils/categories";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="border-2 flex overflow-x-scroll flex-nowrap items-center justify-start w-full no-scrollbar mb-6 shadow-none py-5 border-none sticky top-0 bg-slate-50 dark:bg-black">
      {CATEGORIES.map((category) => (
        <Link key={uuidV4()} to={`/results?search_query=${category}`}>
          <Category>{category}</Category>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
