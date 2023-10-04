import React from 'react'
import useVideoInfo from '../utils/hooks/useVideoInfo';

const SearchedVideoCard = ({vdId}) => {

    const vdInfo=useVideoInfo(vdId);
   
  return (
    <div className='flex m-2  w-[1000px]'>
      <div className='py-2 w-2/5' ><img className='w-[370px] h-[210px] rounded-xl mx-2' src={vdInfo?.snippet?.thumbnails?.medium?.url} alt="" /></div>
     <div className='py-2 w-3/5'><h1 className=' text-xl font-medium text-slate-950'>{vdInfo?.snippet?.title}</h1>
      <div> <img src="" alt="" /><h2 className='py-2'>{vdInfo?.snippet?.channelTitle}</h2></div>
      <h2>{vdInfo?.statistics?.viewCount} Views</h2>
      <h2 className='my-5 py-2 w-full h-9 overflow-y-hidden'>{vdInfo?.snippet?.description.split('\n')[0] }...</h2>
      </div> 
    </div>
  )
}

export default SearchedVideoCard
