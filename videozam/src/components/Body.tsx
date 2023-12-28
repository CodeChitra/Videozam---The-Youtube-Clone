import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useAppSelector } from "../store/hooks/hooks";

const Body = () => {
  const isSidebarOpen = useAppSelector((store) => store.app.isSidebarOpen);
  return (
    <main className="flex gap-2 w-full border-none">
      {isSidebarOpen && <Sidebar />}
      <MainContainer />
    </main>
  );
};

export default Body;
