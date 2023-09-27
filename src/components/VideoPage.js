import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/hamburgerSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL, YOUTUBE_VIDEO_BY_ID } from "../utils/Constant";
import Shimmer from "./Shimmer";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const vdId = searchParams.get("v");
  const [videoInfo, setVideoInfo] = useState([]);
  const [channelInfo, setChannelInfo] = useState([]);
  const dispatch = useDispatch();
  dispatch(closeMenu());

  const pathOfFrame =
    "https://www.youtube.com/embed/" + vdId + "?si=9gHQvNnVyUDwGW-P";

  const pathOfVideo = YOUTUBE_VIDEO_BY_ID + "&id=" + vdId;

  useEffect(() => {
    fetchVideo();
  }, []);

  useEffect(() => {
    fetchChannel();
  }, [videoInfo]);

  const fetchVideo = async () => {
    const vdData = await fetch(pathOfVideo);
    const vdJson = await vdData.json();
    console.log(vdJson.items[0]);
    setVideoInfo(vdJson.items[0]);
  };
  const fetchChannel = async () => {
    if (videoInfo.length !== 0) {
      const pathOfChannel =
        YOUTUBE_CHANNEL + "&id=" + videoInfo.snippet.channelId;
      const data = await fetch(pathOfChannel);
      const json = await data.json();
      console.log(json);
      setChannelInfo(json.items[0]);
    }
  };

  if (videoInfo.length === 0) return <Shimmer />;
  return (
    <div className="p-5 w-1000 ">
      <iframe
        className="rounded-xl"
        width="1000"
        height="500"
        src={pathOfFrame}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="w-1000 text-xl font-semibold p-2 m-2">
        <h1>{videoInfo.snippet.title}</h1>
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <div className="">
            <img
              className="rounded-full  w-12 cursor-pointer"
              src={channelInfo?.snippet?.thumbnails?.default?.url}
              alt=""
            />
          </div>
          <div className="channelInfo px-4">
            <h1 className="font-semibold">{channelInfo?.snippet?.title}</h1>
            <h3>{channelInfo?.statistics?.subscriberCount} subscribers</h3>
          </div>
          <div className=" text-white bg-black font-semibold px-5 py-3 rounded-full">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="flex">
          <button className="flex hover:bg-stone-300 justify-between  bg-stone-100 rounded-l-full  px-4 py-3 font-semibold">
            <h3>👍🏻</h3>
            <h3>{videoInfo?.statistics?.likeCount / 1000}k</h3>
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-r-full  px-4 py-3 border border-s border-r-2 border-l-0 border-t-0 border-b-0">
            👎🏻
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-full  px-4 py-3 mx-2 font-semibold">
            🤝🏻 Share
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-full  px-4 py-3 mx-2 font-semibold">
            Download
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-full  px-4 pt-0 pb-2  mx-2 text-2xl font-
          bold">
          ...
          </button>
        </div>
        
      </div>
      <div className="w-[63rem] my-5 p-2 bg-stone-100 rounded-xl"><p>{videoInfo?.snippet?.description}</p></div>
    </div>
  );
};

export default VideoPage;
