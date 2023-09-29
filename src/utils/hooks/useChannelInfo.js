import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL } from "../Constant";

const useChannelInfo=(channelId)=>{
    const [channel,setChannel]=useState([]);
    useEffect(()=>{
        if(channelId !== undefined){
        fetchData();
        }
        else{
            console.log("hihihi...");
        }
        
    },[channelId]);
    const fetchData=async()=>{
        const data = await fetch(YOUTUBE_CHANNEL+"&id=" +channelId);
        
        const json = await data.json();
      
        setChannel(json?.items[0]);
        
    }
    return channel;
}

export default useChannelInfo;