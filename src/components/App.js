import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'


export class App extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount(){
    this.onTermSubmit('youtube')
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })
  }

  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App