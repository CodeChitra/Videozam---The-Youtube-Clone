import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useAppSelector } from "../store/hooks/hooks";

const Body = () => {
  const isSidebarOpen = useAppSelector((store) => store.app.isSidebarOpen);
  return (
    <main className="grid grid-flow-col gap-2">
      {isSidebarOpen && <Sidebar />}
      <MainContainer />
    </main>
  );
};

export default Body;
