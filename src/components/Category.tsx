import { ReactNode } from "react";

type CategoryProps = {
  children: ReactNode;
};
const Category = ({ children }: CategoryProps) => {
  return (
    <button className="bg-gray-600 text-white p-1 px-2 mr-2 text-center rounded-lg text-nowrap">
      {children}
    </button>
  );
};

export default Category;
