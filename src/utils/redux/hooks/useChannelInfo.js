import { useEffect, useState } from "react";


const useChannelInfo=(channelId)=>{
    const [channel,setChannel]=useState;
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData=async()=>{
        const data = await fetch(YOUTUBE_CHANNEL+"&id=" +channelId);
        const json = await data.json();
        console.log(json)
        setChannel(json);
    }
    return channel;
}

export default useChannelInfo;