
const VideoCard = ({ info }) => {
 
  return (
    <div className="m-2 w-72 pt-4 " >
      <img
        className=" rounded-xl"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <h1> {info?.snippet?.title}</h1>
      <h1 className=" text-sm text-gray-500">{info?.snippet.channelTitle} </h1>
      <h1 className=" text-sm text-gray-500">
        {info?.statistics.viewCount} Views
      </h1>
    </div>
  );
};
export default VideoCard;
