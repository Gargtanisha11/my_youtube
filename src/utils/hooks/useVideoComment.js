import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_COMMENT } from "../Constant";


const useVideoComment=(vdId)=>{
    const [commentList,setCommentList]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[vdId])

    const fetchData=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_COMMENT+vdId);
        const json=await data.json();
       console.log(json);
        setCommentList(json.items)
    }

    return commentList;
}

export default useVideoComment;