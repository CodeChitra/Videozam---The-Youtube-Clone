import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch } from "../store/hooks/hooks";
import { toggleSidebar } from "../store/feature/appSlice";
const Head = () => {
  const dispatch = useAppDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <header className="flex border-2 p-3 justify-between items-center h-[10vh]">
      {/* Left */}
      <div className="flex">
        <button onClick={handleToggleSidebar}>
          <RxHamburgerMenu size={30} />
        </button>
        <div className="h-8 ml-4">
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
      <div>
        <button>
          <CgProfile size={30} />
        </button>
      </div>
    </header>
  );
};

export default Head;
