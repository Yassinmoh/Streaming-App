import '../styles/VideoItem.css'
import React from 'react'
const VideoItem = ({video}) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                    <h3>{video.snippet.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default VideoItem