import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY='AIzaSyDcDIkhYhvL4NAp-QzFbKR4WH8BKnT7MUc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : []
    };

    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({videos})
    })


  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
