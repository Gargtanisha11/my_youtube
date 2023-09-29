import React from "react";
import { useState } from "react";
const UpdatingButtonVideo = ({ videoInfo, channelInfo }) => {
  const [hideDescription, setHideDescription] = useState("...more");

  const handleClickMore=()=>{
    hideDescription==="...more" ? setHideDescription("...less") :setHideDescription("...more");
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="">
            <img
              className="rounded-full  w-12 cursor-pointer"
              src={channelInfo?.snippet?.thumbnails?.default?.url}
              alt=""
            />
          </div>
          <div className="channelInfo px-4">
            <h1 className="font-semibold">{channelInfo?.snippet?.title}</h1>
            <h3>{channelInfo?.statistics?.subscriberCount} subscribers</h3>
          </div>
          <div className=" text-white bg-black font-semibold px-5 py-3 rounded-full  hover:bg-gray-800 active:bg-gray-950">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="flex">
          <button className="flex hover:bg-stone-300 justify-between  bg-stone-100 rounded-l-full  px-4 py-3 font-semibold">
            <h3>👍🏻</h3>
            <h3>{videoInfo?.statistics?.likeCount / 1000}k</h3>
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-r-full  px-4 py-3 border border-s border-r-2 border-l-0 border-t-0 border-b-0">
            👎🏻
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-full  px-4 py-3 mx-2 font-semibold">
            🤝🏻 Share
          </button>
          <button className="hover:bg-stone-300 bg-stone-100 rounded-full  px-4 py-3 mx-2 font-semibold">
            Download
          </button>
          <button
            className="hover:bg-stone-300 bg-stone-100 rounded-full  px-4 pt-0 pb-2  mx-2 text-2xl font-
          bold"
          >
            ...
          </button>
        </div>
      </div>
      <div
        className={
          hideDescription === "...more"
            ? " h-28 w-[60rem] my-5 p-5 bg-stone-100 rounded-xl overflow-hidden"
            : " w-[60rem] my-5 p-5 bg-stone-100 rounded-xl"
        }
      >
        <div className="flex justify-between">
        <div>
          {videoInfo?.statistics?.viewCount}views
          {videoInfo?.snippet?.publishedAt}
        </div> 
        <button className=" bg-black text-white rounded-xl w-20 p-2" onClick={handleClickMore}> {hideDescription}</button>
        </div>
        <span>{videoInfo?.snippet?.description}</span>

        
      </div>
    </div>
  );
};

export default UpdatingButtonVideo;
