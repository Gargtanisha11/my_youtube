import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/hamburgerSlice";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_CAPTION } from "../utils/Constant";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const vdId = searchParams.get("v");
  const videoInfo=useSelector(state=>state.videoInfo.info);
  const dispatch = useDispatch();

  dispatch(closeMenu());

  const pathOfVideo =
    "https://www.youtube.com/embed/" + vdId + "?si=9gHQvNnVyUDwGW-P";

  useEffect(() => {
    fetchCaption();
  }, []);

  const fetchCaption = async () => {
    const data = await fetch(YOUTUBE_VIDEO_CAPTION + "&videoId=" + vdId);
    const json = await data.json();
  };

  return (
    <div className="p-5">
      <iframe
        className="rounded-xl"
        width="1000"
        height="500"
        src={pathOfVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="w-1000 text-xl font-bold">{videoInfo.snippet.channelTitle}</h1>
    </div>
  );
};

export default VideoPage;
