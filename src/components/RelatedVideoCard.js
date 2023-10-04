import useVideoInfo from "../utils/hooks/useVideoInfo"
import VideoCard from "./VideoCard";

const RelatedVideoCard=({vdId})=>{
    const videoInfo=useVideoInfo(vdId);

   return <div>
   <VideoCard info={videoInfo} thumbnail={"default"}/>
    </div>
    
}
export default RelatedVideoCard