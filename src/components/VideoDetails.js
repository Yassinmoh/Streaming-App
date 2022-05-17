import React from 'react'

const VideoDetails = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    return (
        <div>{video.snippet.title}</div>
    )
}

export default VideoDetails