import React from 'react'
import VideoItem from './VideoItem'



const VideoList = ({ videos }) => {
    const renderList =videos.map(video => (
        <VideoItem video={video}  key={Math.random()}/>))
    return (
        <div>
            {renderList}
        </div>
    )
}

export default VideoList