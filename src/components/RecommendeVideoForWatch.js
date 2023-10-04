import React from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useRelatedVideo from "../utils/hooks/useRelatedVideo";

import RelatedVideoCard from "./RelatedVideoCard";

const RecommendeVideoForWatch = ({ query }) => {

  const videoList = useRelatedVideo(query);

 

  if (videoList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="py-5">
      {videoList.map((video) => (
        <Link to={"/watch?v=" + video?.id?.videoId} key={video?.id?.videoId}>
          <RelatedVideoCard vdId={video?.id?.videoId} />
        </Link>
      ))}
     
    </div>
  );
};

export default RecommendeVideoForWatch;
