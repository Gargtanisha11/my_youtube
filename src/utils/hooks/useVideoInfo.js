import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_BY_ID } from "../Constant";




const useVideoInfo = (vdId) => {
  const [videoInfo, setVideoInfo] = useState([]);
 
  const pathOfVideo = YOUTUBE_VIDEO_BY_ID + "&id=" + vdId;
  
  useEffect(() => {
    fetchData();
  },[vdId]);
  const fetchData = async () => {
    const vdData = await fetch(pathOfVideo);
    const vdJson = await vdData.json();
    
    setVideoInfo(vdJson.items[0]);
    
  };

  return videoInfo;
};

export default useVideoInfo;
