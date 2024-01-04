import { v4 as uuidv4 } from "uuid";
import { Link, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";
import { useRef } from "react";
import {
  clearSearchedVideos,
  getSearchedVideos,
} from "../store/feature/search/searchSlice";
import Video from "./Video";
import useInfiniteScroll from "../custom-hooks/useInfiniteScroll";

const ResultsContainer = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query") || "";
  const searchedVideos = useAppSelector((store) => store.search.searchedVideos);
  const targetRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll(
    targetRef,
    getSearchedVideos,
    searchQuery,
    clearSearchedVideos
  );
  return (
    <div className="flex-[5] overflow-y-scroll max-h-[90vh] min-h-[90vh] border-none">
      <div className="border-none w-full grid grid-cols-1 sm:grid-cols-3 grid-flow-row justify-items-center gap-4">
        {searchedVideos.map((video) => {
          return (
            <Link key={uuidv4()} to={`/watch?v=${video.id.videoId}`}>
              <Video video={video} />
            </Link>
          );
        })}
      </div>
      <div ref={targetRef}>Loading...</div>
    </div>
  );
};

export default ResultsContainer;
