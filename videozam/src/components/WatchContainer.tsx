import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/hooks";
import { closeSidebar } from "../store/feature/app/appSlice";

const WatchContainer = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="flex-[5] p-5 h-[90vh] border-2">
      <iframe
        className="w-[60%] h-[80%] rounded-xl border-1 border-gray-200 shadow-xl"
        src={"https://www.youtube.com/embed/" + id}
      ></iframe>
    </div>
  );
};

export default WatchContainer;
