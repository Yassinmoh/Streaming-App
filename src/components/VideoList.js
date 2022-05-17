import React from 'react'
import VideoItem from './VideoItem'



const VideoList = ({ videos,onSelectedVideo }) => {
    const renderList =videos.map(video => (
        <VideoItem onSelectedVideo={onSelectedVideo} video={video}  key={Math.random()}/>))
    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

export default VideoList