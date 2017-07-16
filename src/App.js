import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY='AIzaSyDcDIkhYhvL4NAp-QzFbKR4WH8BKnT7MUc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar onSearchTermChange={ term => this.videoSearch(term)} />
        </div>
        <div>
          <div className="row">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="row">
            <VideoList
              onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
