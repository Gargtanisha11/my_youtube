import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/hamburgerSlice";
import Shimmer from "./Shimmer";
import UpdatingButtonVideo from "./UpdatingButtonVideo";
import VideoFrame from "./VideoFrame";
import useChannelInfo from "../utils/hooks/useChannelInfo";
import useVideoInfo from "../utils/hooks/useVideoInfo";
import RecommendeVideoForWatch from "./RecommendeVideoForWatch";
import VideoComments from "./VideoComments";
import comments from "../utils/MOCKDATA_COMMENT";
import LiveChatComponent from "./LiveChatComponent";
import SideBar from "./SideBar";
import BarClose from "./BarClose";
const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const vdId = searchParams.get("v");

  const hamburgerOpenInfo = useSelector(
    (store) => store.hamburgerMenu.isOpenMenu
  );

  const pathOfFrame =
    "https://www.youtube.com/embed/" + vdId + "?si=9gHQvNnVyUDwGW-P";

  const videoInfo = useVideoInfo(vdId);

  // console.log(videoInfo?.snippet?.channelId);

  const channelInfo = useChannelInfo(videoInfo?.snippet?.channelId);

  const dispatch = useDispatch();

  if (videoInfo.length === 0) return <Shimmer />;

  return (
    <div className="flex">
      <div className="fixed left-0">
        {hamburgerOpenInfo && <SideBar info="videopage" />}
      </div>
      <div className={hamburgerOpenInfo ? " shadow-slate-700 flex " : " flex "}>
        <div className="p-5 w-[1020px] ">
          <VideoFrame videoInfo={videoInfo} pathOfFrame={pathOfFrame} />
          <UpdatingButtonVideo
            videoInfo={videoInfo}
            channelInfo={channelInfo}
          />
          {videoInfo?.snippet?.liveBroadcastContent === "none" && (
            <VideoComments vdId={vdId} comments={comments} />
          )}
        </div>
        <div className="ml-6 ">
          {videoInfo?.snippet?.liveBroadcastContent === "live" && (
            <LiveChatComponent />
          )}
          <RecommendeVideoForWatch query={videoInfo?.snippet?.title} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
