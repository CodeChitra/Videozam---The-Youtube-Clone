import { useRef } from "react";
import { useAppSelector } from "../store/hooks/hooks";
import { getVideos } from "../store/feature/app/appSlice";
import Video from "./Video";
import { Link } from "react-router-dom";
import useInfiniteScroll from "../custom-hooks/useInfiniteScroll";

const Videos = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const videos = useAppSelector((store) => store.app.videos);
  useInfiniteScroll(target, getVideos);
  return (
    <>
      <div className="border-none w-full grid grid-cols-1 sm:grid-cols-3 grid-flow-row justify-items-center gap-4">
        {videos.map((video) => {
          return (
            <Link key={video.id} to={`/watch?v=${video.id}`}>
              <Video video={video} />
            </Link>
          );
        })}
      </div>
      <div ref={target} className="text-center dark:text-white font-bold">
        Loading...
      </div>
    </>
  );
};

export default Videos;
