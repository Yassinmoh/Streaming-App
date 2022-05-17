import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'



export class App extends Component {
  state = { videos: [] ,selectedVideo:null}
  
  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: res.data.items })
  }

  onSelectedVideo = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetails video={this.state.selectedVideo}/> 
        <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
      </div>
    )
  }
}

export default App