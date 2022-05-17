import React from 'react'
import '../styles/video-details.css'
const VideoDetails = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-details">
            <div className="ui embed">
                <iframe title="Video player"src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails