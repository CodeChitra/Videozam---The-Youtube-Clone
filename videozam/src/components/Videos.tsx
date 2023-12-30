import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getVideos } from "../store/feature/app/appSlice";
import Video from "./Video";
import { Link } from "react-router-dom";

const Videos = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((store) => store.app.videos);
  const isLoading = useAppSelector((store) => store.app.isLoading);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          dispatch(getVideos());
        }
      },
      {
        threshold: 0,
      }
    );

    if (target.current) observer.current.observe(target.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
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
