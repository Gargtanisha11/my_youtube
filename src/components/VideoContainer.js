
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import usePopularVideo from "../utils/hooks/usePopularVideo";
import Shimmer from "./Shimmer";
const VideoContainer = () => {
 

 const videoList=usePopularVideo(YOUTUBE_POPULAR_VIDEOS);

  
 if(videoList===null){
  return <Shimmer/>
 }
  return (
    <div className="px-2 py-5 flex flex-wrap">
        {videoList.map(video=> <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>
        )}
      
    </div>
  );
};

export default VideoContainer;
