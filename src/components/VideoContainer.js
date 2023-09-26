import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideoList(json.items);
   
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="px-10 py-5 flex flex-wrap">
        {videoList.map(video=> <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>
        )}
      
    </div>
  );
};

export default VideoContainer;
