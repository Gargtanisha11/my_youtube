import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../utils/redux/videoInfo";
const VideoCard = ({ info }) => {
  const dispatch = useDispatch();
  const hamburgerOpenInfo = useSelector((store) => store.videoInfo.info);
  const addVdInfo = () => {
    dispatch(addInfo(info));
    console.log(hamburgerOpenInfo);
  };
  return (
    <div className="m-5 w-80 " onClick={addVdInfo}>
      <img
        className=" rounded-xl"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <h1> {info?.snippet?.title}</h1>
      <h1 className=" text-sm text-gray-500">{info?.snippet.channelTitle} </h1>
      <h1 className=" text-sm text-gray-500">
        {info?.statistics.viewCount} Views
      </h1>
    </div>
  );
};
export default VideoCard;
