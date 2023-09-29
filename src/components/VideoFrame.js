import React from 'react'

const VideoFrame = ({videoInfo,pathOfFrame}) => {
  return (
    <div>
      <iframe
        className="rounded-xl"
        width="980"
        height="500"
        src={pathOfFrame}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="w-1000 text-xl font-semibold p-2 m-2">
        <h1>{videoInfo.snippet.title}</h1>
      </div>

    </div>
  )
}

export default VideoFrame
