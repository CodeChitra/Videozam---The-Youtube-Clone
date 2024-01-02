import { VideoType } from "../types/video-type";

type VideoProps = {
  video: VideoType;
};
const Video = ({ video }: VideoProps) => {
  const { snippet, statistics } = video;
  const image = snippet?.thumbnails?.high?.url;
  return (
    <div className="rounded-lg border-2 p-1 flex flex-col h-[100%] w-[100%] min-w-[300px] min-h-[350px] dark:text-white  dark:bg-gray-950 dark:border-black">
      <div className="flex-1 w-[100%] h-[70%] border-none">
        <img
          className="w-full h-full object-cover border-1 border-black shadow-lg"
          src={image}
          alt="Loading..."
        />
      </div>
      <div className="flex-1 flex gap-4 mt-3">
        <div>logo</div>
        <div className="text-sm text-gray-500 dark:text-white font-bold font-sans flex flex-col gap-3">
          <h3 className="text-base text-gray-900 dark:text-white">
            {snippet?.title?.slice(0, 40)}...
          </h3>
          <h4>{snippet?.channelTitle}</h4>
          <div className="flex gap-3">
            <h5>{statistics?.viewCount} views</h5>
            {/* TODO: Published AT */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
