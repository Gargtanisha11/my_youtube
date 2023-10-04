import React, { useEffect, useState } from "react";
import { YOUTUBE_RELATED_VIDEO } from "../Constant";

const useRelatedVideo = ( query ) => {
  const [relatedSearchList, setRelatedSearchList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_RELATED_VIDEO + query);
 
    const json = await data.json();
    
    setRelatedSearchList(json.items);
  };
  return relatedSearchList;
};

export default useRelatedVideo;
