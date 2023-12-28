import Categories from "./Categories";
import Videos from "./Videos";

const MainContainer = () => {
  return (
    <div className="px-5 flex-[5] border-2 overflow-y-scroll max-h-[90vh] min-h-[90vh] border-none bg-slate-50">
      <Categories />
      <Videos />
    </div>
  );
};

export default MainContainer;
