import Categories from "./Categories";
import Videos from "./Videos";

const MainContainer = () => {
  return (
    <div className="col-span-10 border-2 border-green-500 overflow-y-scroll max-h-[90vh] min-h-[90vh]">
      <Categories />
      <Videos />
    </div>
  );
};

export default MainContainer;
