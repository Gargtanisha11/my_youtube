import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useRelatedVideo from "../utils/hooks/useRelatedVideo";
import Shimmer from "./Shimmer";
import SearchedVideoCard from "./SearchedVideoCard";
const SearchedVideoPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const searchList = useRelatedVideo(searchQuery);


  if (searchList.length === 0) return <Shimmer />;

  return <div>
    {
        searchList.map((video)=>(
          
            <Link to={"/watch?v="+video?.id?.videoId} key={video?.id?.videoId} ><SearchedVideoCard vdId={video?.id?.videoId}/></Link>
        ))
    }
  </div>;
};

export default SearchedVideoPage;
