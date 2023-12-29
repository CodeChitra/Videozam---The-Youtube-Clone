import Sidebar from "./Sidebar";
import { useAppSelector } from "../store/hooks/hooks";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSidebarOpen = useAppSelector((store) => store.app.isSidebarOpen);
  return (
    <main className="flex gap-2 w-full border-none">
      {isSidebarOpen && <Sidebar />}
      <Outlet />
    </main>
  );
};

export default Body;
