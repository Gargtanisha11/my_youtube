const VideoCard = ({ info, thumbnail }) => {
  //console.log(thumbnail);
  return (
    <div className= "m-2 w-72 pt-4 ">
      <img
        className="rounded-xl"
        src={
        
             info?.snippet?.thumbnails?.medium?.url
         
        }
        alt=""
      />
      <div><h1> {info?.snippet?.title}</h1>
      <h1 className=" text-sm text-gray-500">{info?.snippet?.channelTitle} </h1>
      <h1 className=" text-sm text-gray-500">
        {info?.statistics?.viewCount} Views
      </h1></div>
      
    </div>
  );
};
export default VideoCard;
