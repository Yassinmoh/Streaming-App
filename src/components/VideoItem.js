import '../styles/VideoItem.css'
import React from 'react'
const VideoItem = ({ video, onSelectedVideo }) => {
    return (
        <div onClick={() => onSelectedVideo(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    <h4>{video.snippet.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default VideoItem