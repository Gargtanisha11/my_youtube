import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/hamburgerSlice";
import Shimmer from "./Shimmer";
import UpdatingButtonVideo from "./UpdatingButtonVideo";
import VideoFrame from "./VideoFrame";
import useChannelInfo from "../utils/hooks/useChannelInfo";
import useVideoInfo from "../utils/hooks/useVideoInfo";
import RecommendeVideoForWatch from "./RecommendeVideoForWatch";
import VideoComments from "./VideoComments";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const vdId = searchParams.get("v");
  
  const pathOfFrame =
    "https://www.youtube.com/embed/" + vdId + "?si=9gHQvNnVyUDwGW-P";
  

  const videoInfo=useVideoInfo(vdId);
  
 // console.log(videoInfo?.snippet?.channelId);
 
  const channelInfo=useChannelInfo(videoInfo?.snippet?.channelId);

  const dispatch = useDispatch();
     dispatch(closeMenu());

  
   if (videoInfo.length === 0) return <Shimmer />;

  return (
    <div className="flex">
    <div className="p-5 w-[1020px] ">
      <VideoFrame videoInfo={videoInfo} pathOfFrame={pathOfFrame} />
      <UpdatingButtonVideo videoInfo={videoInfo} channelInfo={channelInfo} />
      <VideoComments vdId={vdId}/>
    </div>
    <RecommendeVideoForWatch/>
    </div>

  );
};

export default VideoPage;
