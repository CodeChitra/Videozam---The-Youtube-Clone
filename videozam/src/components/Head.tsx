import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { toggleDarkMode, toggleSidebar } from "../store/feature/app/appSlice";
const Head = () => {
  const dark = useAppSelector((store) => store.app.dark);
  const dispatch = useAppDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  const color = dark ? "white" : "black";
  return (
    <header className="flex border-2 px-3 justify-between items-center h-[10vh] shadow-lg w-full dark:bg-gray-900 dark:text-white dark:border-black">
      {/* Left */}
      <div className="flex">
        <button onClick={handleToggleSidebar}>
          <RxHamburgerMenu size={30} style={{ color }} />
        </button>
        <div className="h-8 ml-4 cursor-pointer">
          <img className="h-full" src="/youtube-logo.png" alt="youtube logo" />
        </div>
      </div>
      {/* Middle */}
      <div className="w-[35%] relative">
        <input
          className="w-full border-gray-300 border-2 outline-none rounded-xl p-1"
          type="text"
          placeholder="Search"
        />
        <button className="absolute right-0 top-0 bg-gray-300 w-10 h-full flex items-center justify-center rounded-xl overflow-hidden">
          <IoIosSearch />
        </button>
      </div>
      {/* Right */}
      <div className="flex justify-between items-center w-32">
        <button onClick={handleToggleDarkMode}>
          {dark ? (
            <MdOutlineLightMode size={24} style={{ color }} />
          ) : (
            <MdOutlineDarkMode size={24} style={{ color }} />
          )}
        </button>
        <button>
          <CgProfile size={24} style={{ color }} />
        </button>
      </div>
    </header>
  );
};

export default Head;
