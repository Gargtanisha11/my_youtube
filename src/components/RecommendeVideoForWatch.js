import React from 'react'
import Shimmer from './Shimmer';
import { YOUTUBE_POPULAR_VIDEOS } from '../utils/Constant';
import usePopularVideo from '../utils/hooks/usePopularVideo';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const RecommendeVideoForWatch = () => {
    const videoList=usePopularVideo(YOUTUBE_POPULAR_VIDEOS);

    if(videoList===null){
        return <Shimmer/>
    }
  return (
    <div className='py-5'>
      {videoList.map(video=> <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>
        )}
    </div>
  )
}

export default RecommendeVideoForWatch
