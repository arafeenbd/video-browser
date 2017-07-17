import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  return (
    <ul className="list-group">
    {
        props.videos.map( video => {
          return (
            <VideoListItem
              onVideoSelect={props.onVideoSelect}
              key={video.etag}
              video={video} />
          )
        })
    }
    </ul>
  )
}

export default VideoList;
