import React from 'react'
import VideoItem from './VideoItem'
import '../styles/VideoList.css'


const VideoList = ({ videos,onSelectedVideo }) => {
    const renderList =videos.map(video => (
        <VideoItem onSelectedVideo={onSelectedVideo} video={video}  key={Math.random()}/>))
    return (
        <div className="ui relaxed divided list Video-list">
            {renderList}
        </div>
    )
}

export default VideoList