import Categories from "./Categories";
import Videos from "./Videos";

const MainContainer = () => {
  return (
    <div className="flex-[5] overflow-y-scroll max-h-[90vh] min-h-[90vh] border-none">
      <Categories />
      <Videos />
    </div>
  );
};

export default MainContainer;
