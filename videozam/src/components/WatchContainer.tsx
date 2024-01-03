import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/hooks";
import { closeSidebar } from "../store/feature/app/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchContainer = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="flex-[5] p-5 border-2 min-h-[90vh] max-h-[90vh] overflow-y-scroll flex gap-5">
      <div className="h-full w-[70%]">
        <iframe
          className="w-full h-[85%] rounded-xl border-1 border-gray-200 shadow-xl"
          src={"https://www.youtube.com/embed/" + id}
        ></iframe>
        <div className="w-full mt-3">
          <h1 className="text-lg font-bold">Comments: </h1>
          <CommentsContainer />
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchContainer;
