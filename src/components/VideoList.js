import React from 'react';
import VideoListItem from './VideoListItem';
// imageUrl : video.snippet.thumbnails.default.url

const VideoList = props => {
  console.log(props.videos)
  return (
    <ul className="col-md-4 list-group">
    {
        props.videos.map( video => {
          return (
            <VideoListItem key={video.etag} video={video} />
          )
        })
    }
    </ul>
  )
}

export default VideoList;
