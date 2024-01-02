import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { toggleDarkMode, toggleSidebar } from "../store/feature/app/appSlice";
import { useEffect, useState } from "react";
import {
  getSuggestions,
  setShowSuggestions,
} from "../store/feature/search/searchSlice";
import { Link, Outlet } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dark = useAppSelector((store) => store.app.dark);
  const { suggestions, showSuggestions } = useAppSelector(
    (store) => store.search
  );
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  const color = dark ? "white" : "black";

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSuggestions(searchQuery));
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <>
      <header className="flex border-2 px-3 justify-between items-center h-[10vh] shadow-lg w-full dark:bg-gray-900 dark:text-white dark:border-black">
        {/* Left */}
        <div className="flex">
          <button onClick={handleToggleSidebar}>
            <RxHamburgerMenu size={30} style={{ color }} />
          </button>
          <Link to={"/"} className="h-8 ml-4 cursor-pointer">
            <img
              className="h-full"
              src="/youtube-logo.png"
              alt="youtube logo"
            />
          </Link>
        </div>
        {/* Middle */}
        <div className="w-[35%] relative">
          {showSuggestions && suggestions.length > 0 && (
            <div className="bg-slate-50 w-full absolute top-10 z-20 rounded-lg border-2 border-slate-100 shadow-lg dark:bg-gray-800 dark:border-gray-900">
              <ul className="py-2">
                {suggestions.map((suggestion) => (
                  <Link
                    key={suggestion}
                    to={`/results?search_query=${suggestion}`}
                  >
                    <li className="px-2 py-1 hover:bg-slate-200 dark:hover:bg-gray-700 cursor-pointer">
                      🔍 {suggestion}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <input
            id="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => dispatch(setShowSuggestions(true))}
            className="w-full border-2 border-black outline-none rounded-xl px-2 py-1 dark:text-black"
            type="text"
            placeholder="Search"
            value={searchQuery}
          />
          <button className="absolute right-0 top-0 bg-gray-500 w-10 h-full flex items-center justify-center rounded-r-xl overflow-hidden">
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
      <Outlet />
    </>
  );
};

export default Head;
